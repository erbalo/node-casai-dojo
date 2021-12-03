import morgan, { StreamOptions } from 'morgan'
import Logger from '../commons/logger'

const stream:StreamOptions = {
    write:(message)=> Logger.http(message)
}

const skip = () => {
    const env = process.env.NODE_ENV || 'development'
    return env != 'development'
}

const morgan_middleware =  morgan(
    ':method :url :status :res[content-length]',
    {stream,skip})

export default morgan_middleware