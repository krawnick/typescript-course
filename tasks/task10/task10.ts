enum TransferStatus {
  Pending = 'pending',
  Rejected = 'rejected',
  Completed = 'completed',
}

enum ErrorMessages {
  NotFound = 'Not found: 404',
  NotEnoughSpace = 'Not enough space: 507',
  Forbidden = 'Forbidden: 403',
}

interface ITransfer {
  path: string
  data: string[]
  date?: Date
  start: (p: string, d: string[]) => string
  stop: (reason: string) => string
}

interface TransferError {
  message: ErrorMessages
}

// Класс должен имплементировать ITransfer и TransferError
class SingleFileTransfer implements ITransfer, TransferError {
  path: string
  data: string[]
  date?: Date | undefined
  message: ErrorMessages
  transferStatus: TransferStatus

  start(p: string, d: string[]): string {
    return `Transfer started`
  }

  // Место для реализаций
  constructor(status: TransferStatus) {
    this.transferStatus = status
  }

  // Необходимо создать метод checkTransferStatus, проверяющий состояние передачи данных
  // Можно вывести в консоль данные, можно вернуть строку
  checkTransferStatus(): string {
    return `${this.transferStatus}`
  }

  // Необходимо создать метод, который будет останавливать передачу данных
  // И возвращать строку с причиной и датой остановки (Дата в любом формате)
  stop(reason: string): string {
    return `Transfer stoped: ${reason}. Date: ${new Date().toDateString()}`
  }

  // Необходимо создать метод, который будет возвращать строку, содержащую
  // Статус передачи и любое сообщение об ошибке. На ваш выбор или отталкиваться от приходящего аргумента
  // Метод может показаться странным, но может использоваться для тестов, например
  checkErrorStatus(): string {
    return `Status: ${TransferStatus.Rejected}, Error: ${ErrorMessages.NotFound}`
  }
}

const transfer = new SingleFileTransfer(TransferStatus.Pending)
console.log(transfer.checkTransferStatus())
console.log(transfer.stop('Reason'))
console.log(transfer.checkErrorStatus())
