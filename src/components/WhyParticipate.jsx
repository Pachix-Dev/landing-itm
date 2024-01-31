import { useNearScreen } from '../hooks/useNearScreen'
import { Bullets } from './Bullets'

export function WhyParticipate() {
  const [show, ref] = useNearScreen()
  return (
    <section className='mt-10 container mx-auto grid md:grid-cols-3 lg:grid-cols-5 gap-5 '>
      <div ref={ref}>
        {show && (
          <>
            <div>
              <Bullets number='15000' duration='4' />
              <div className='text-center font-bold'>
                <i className='text-2xl'>Compradores profesionales</i>
              </div>
            </div>
            <div>
              <Bullets number='5000' duration='4' />
              <div className='text-center font-bold'>
                <i className='text-2xl'>Estudiantes</i>
              </div>
            </div>
            <div>
              <Bullets number='1370' duration='4' />
              <div className='text-center font-bold'>
                <i className='text-2xl'>
                  Millones de pesos de negocios en sitio
                </i>
              </div>
            </div>
            <div>
              <Bullets number='260' duration='4' />
              <div className='text-center font-bold'>
                <i className='text-2xl'>
                  Millones de pesos de valor en cobertura mediática
                </i>
              </div>
            </div>
            <div>
              <Bullets number='13700' duration='4' simbol='m2' />
              <div className='text-center font-bold '>
                <i className='text-2xl'>Piso expositor</i>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
