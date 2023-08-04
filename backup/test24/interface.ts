interface IConfig {
  protocol: 'http' | 'https'
  port: 3000 | 3001
}
// Возможно расширение интрефейса
interface IConfig {
  date: Date
}

interface IRole {
  role: string
}

interface IConfigWithRole extends IConfig, IRole {}

const serverIConfig: IConfigWithRole = {
  protocol: 'https',
  port: 3001,
  role: 'admin',
  date: new Date(),
}

const startIServer = (
  protocol: 'http' | 'https',
  port: 3000 | 3001
): 'Server started' => {
  console.log(`Server started on ${protocol}://server:${port}`)
  return 'Server started'
}
