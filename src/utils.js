import winston from "winston";

const logger = winston.createLogger({
transports: [
    new winston.transports.Console({level: 'http'})
]
})

export const loggermid = (req , res, next) =>{
    req.logger = logger
    req.logger.http(`${req.method} on ${req.url} - ${new Date().toLocaleDateString() }`)
    next()
}