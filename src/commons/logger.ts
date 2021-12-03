import winston from 'winston'

const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4
}

const level = () => {
    const env = process.env.NODE_ENV || 'development'
    return env == 'development' ? 'debug': 'warn' 
}

const colors = {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    http: 'gray',
    debug: 'blue'
}

winston.addColors(colors)

const format = winston.format.combine(
    winston.format.timestamp({format:'YYYY-MM-dd HH:mm:ss.ms'}),
    winston.format.colorize({all:true}),
    winston.format.printf((info)=>{
        return `${info.timestamp} ${info.level}: ${info.message}`
    })
)

const transports = [
    new winston.transports.Console(),
    new winston.transports.File({
        filename:'logs/errors.log',
        level: 'error'
    })
]

const Logger = winston.createLogger({
    level:level(),
    levels,
    format,
    transports
})
export default Logger