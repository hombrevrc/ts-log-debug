/**
 * @module appenders
 */
/** */
import {LogEvent} from "../../core/LogEvent";
import {Appender} from "../decorators/appender";
import {BaseAppender} from "../class/BaseAppender";

const consoleLog = console.log.bind(console);
/**
 * ## Console Appender
 *
 * This appender uses node’s console object to write log events. It can also be used in the browser, if you’re using browserify or something similar. Be aware that writing a high volume of output to the console can make your application use a lot of memory. If you experience this problem, try switching to the stdout appender.
 *
 * ## Configuration
 *
 * * type - console
 * * layout - object (optional, defaults to colouredLayout) - see layouts
 *
 * Note that all log events are output using console.log regardless of the event’s level (so ERROR events will not be logged using console.error)
 *
 * ## Example
 *
 * ```typescript
 * import {Logger} from "ts-log-debug";
 *
 * const logger = new Logger("loggerName");
 *
 * logger.appenders.push({
 *     type: "console",
 *     levels: ["debug", "info", "trace"]
 * });
 * ```
 *
 * @private
 */
@Appender({name: "console"})
export class ConsoleAppender extends BaseAppender {
    write(loggingEvent: LogEvent) {
        consoleLog(this.layout(loggingEvent, this.config.timezoneOffset));
    }
}