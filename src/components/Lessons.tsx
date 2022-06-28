import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom'
import classNames from 'classnames'


interface LessonsProps{
    title:string
    slug:string
    availableAt: Date
    type: 'live' | 'class'
}

export function Lessons(data:LessonsProps){
    const { slug } = useParams<{slug:string}>()
   
    const isLessonsAvailable = isPast(data.availableAt);
    const availableDateForamtted = format(data.availableAt, "EEEE' • 'd' de 'MMMM'  • ' k'h'mm",{
        locale:  ptBR,
    })

    const isActiveLesson = data.slug === slug
    return (
        <Link to={`/event/lesson/${data.slug}`} className="group">
            <span className="text-gray-300">
                {availableDateForamtted}
            </span>
        
            <div className={classNames(
                'rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 ',
                {'bg-green-500': isActiveLesson}
            ) }>
                <header className="flex items-center justify-between">
                   {isLessonsAvailable?(
                    <span className={classNames('text-sm text-blue-500 font-medium flex gap-2 ',{
                        'text-white': isActiveLesson,
                        'text-blue-500': !isActiveLesson
                    })}>
                        <CheckCircle size={20}/>
                        Conteúdo Liberado
                    </span>
                   ):(
                    <span className="text-sm text-orange-500 font-medium flex gap-2">
                        <Lock size={20}/>
                        Em breve
                    </span>
                   )}
                    <span className={classNames('text-xs rounded py[0.125rem] px-2 border font-bold',{
                        'border-white': isActiveLesson,
                        'border-green-300': !isActiveLesson
                    })}>
                        {data.type==='live'? 'AO VIVO': 'AULA PRATICA'}
                    </span>
                </header>
                <strong className={classNames('mt-5 block', {
                    'text-white':isActiveLesson,
                    'text-gray-200':!isActiveLesson
                    })}>
                    Abertura do evento ignite lab
                </strong>
            </div>
        </Link>
        
    )
}