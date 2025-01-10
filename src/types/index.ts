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

export type ModalType = 'map' | 'quiz' | 'auth'
export type QuizModalVariant = 'success' | 'failure' | 'info'

export interface BaseModalProps {
     isOpen: boolean
     onClose: () => void
}

export interface ContentModalProps extends BaseModalProps {
     title: string
     description: string
     image?: string
     onAction: () => void
}

export interface AuthModalProps extends BaseModalProps {
     title: string
     description: string
}