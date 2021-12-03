import { ServiceFactory } from "./service.factory"

const serviceFactoryInstance = new ServiceFactory()
const serviceLoaders = serviceFactoryInstance.loaders()

export default serviceLoaders
