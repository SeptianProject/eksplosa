export interface QuizQuestion {
     id: string
     question: string
     options: string[]
     correctAnswer: string[]
     level: string
}

export interface LevelData {
     level: string
     title: string
     isActive: boolean
     questions: QuizQuestion[]
}

export interface ModalData {
     image: string
     title: string
     description: string
}

export type ModalType = 'map' | 'quiz' | 'level'
export type QuizModalVariant = 'success' | 'failure' | 'info'