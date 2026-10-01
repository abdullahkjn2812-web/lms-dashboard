// Keep redirected logs plain; FORCE_COLOR=1 can enable colors explicitly.
const colorsEnabled =
  process.env.NO_COLOR === undefined &&
  process.env.FORCE_COLOR !== "0" &&
  (process.stdout.isTTY || process.env.FORCE_COLOR !== undefined);

const colorize = (text, code) =>
  colorsEnabled ? `\x1b[${code}m${text}\x1b[0m` : String(text);

const methodColors = {
  GET: 34, // Blue
  POST: 32, // Green
  PUT: 33, // Yellow
  PATCH: 35, // Magenta
  DELETE: 31, // Red
  OPTIONS: 36, // Cyan
  HEAD: 36,
};

const getStatusColor = (status) => {
  if (status === "ABORTED" || status >= 500) return 31;
  if (status >= 400) return 33;
  if (status >= 300) return 36;
  if (status >= 200) return 32;
  return 90;
};

const requestLogger = (req, res, next) => {
  const startedAt = process.hrtime.bigint();
  // Keep query parameters, headers and request bodies out of the logs.
  const path = req.originalUrl.split("?")[0];
  const request = `${colorize(req.method, methodColors[req.method] || 37)} ${colorize(path, 1)}`;
  const timestamp = () => colorize(`[${new Date().toISOString()}]`, 90);

  console.log(`${timestamp()} --> ${request}`);

  const logResponse = (status) => {
    const durationMs = Number(process.hrtime.bigint() - startedAt) / 1e6;

    console.log(
      `${timestamp()} <-- ${request} ${colorize(status, getStatusColor(status))} ${colorize(`${durationMs.toFixed(1)}ms`, 90)}`,
    );
  };

  res.once("finish", () => logResponse(res.statusCode));
  res.once("close", () => {
    if (!res.writableFinished) {
      logResponse("ABORTED");
    }
  });

  next();
};

module.exports = requestLogger;
