import { useNearScreen } from '../hooks/useNearScreen'
import { Bullets } from './Bullets'

export function WhyParticipate() {
  const [show, ref] = useNearScreen()
  return (
    <section className='mt-10 bg-[url(/bgwhyexhibitnew.webp)] bg-cover bg-fixed text-white py-10'>
      <div className='container mx-auto px-4'>
        <p className='text-4xl font-bold text-[#E42128]'>
          ¿Por qué participar?
        </p>
        <p className='mt-5'>
          Forme parte de Industrial Transformation MEXICO, la feria de
          tecnología de la Industria 4.0 referente en México y Latinoamérica.
          Aproveche la oportunidad para adquirir un stand o ser patrocinador en
          la sexta edición del encuentro de negocios líder en materia de
          transformación hacia la producción inteligente, sustentable y digital.
        </p>
        <p>
          La oportunidad de contribuir al futuro 4.0 con ITM está más cerca que
          nunca.
        </p>
        <div className='mt-10 grid md:grid-cols-3 lg:grid-cols-5 gap-5 place-items-center'>
          <div className='grid place-items-center'>
            <svg
              viewBox='0 0 60 60'
              strokeWidth='3'
              stroke='white'
              fill='none'
              width='80'
            >
              <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
              <g
                id='SVGRepo_tracerCarrier'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></g>
              <g id='SVGRepo_iconCarrier'>
                <circle cx='31.89' cy='22.71' r='5.57'></circle>
                <path d='M43.16,43.74A11.28,11.28,0,0,0,31.89,32.47h0A11.27,11.27,0,0,0,20.62,43.74Z'></path>
                <circle cx='48.46' cy='22.71' r='5.57'></circle>
                <path d='M46.87,43.74H59.73A11.27,11.27,0,0,0,48.46,32.47h0a11.24,11.24,0,0,0-5.29,1.32'></path>
                <circle cx='15.54' cy='22.71' r='5.57'></circle>
                <path d='M17.13,43.74H4.27A11.27,11.27,0,0,1,15.54,32.47h0a11.24,11.24,0,0,1,5.29,1.32'></path>
              </g>
            </svg>
            <p className='text-center'>
              Conecte con proveedores y empresas clave en la Industria 4.0 de
              más de 10 países.
            </p>
          </div>
          <div className='grid place-items-center'>
            <svg viewBox='0 0 24 24' fill='none' width='80' stroke='white'>
              <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
              <g
                id='SVGRepo_tracerCarrier'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></g>
              <g id='SVGRepo_iconCarrier'>
                {' '}
                <path
                  d='M21 21H4.6C4.03995 21 3.75992 21 3.54601 20.891C3.35785 20.7951 3.20487 20.6422 3.10899 20.454C3 20.2401 3 19.9601 3 19.4V3M21 7L15.5657 12.4343C15.3677 12.6323 15.2687 12.7313 15.1545 12.7684C15.0541 12.8011 14.9459 12.8011 14.8455 12.7684C14.7313 12.7313 14.6323 12.6323 14.4343 12.4343L12.5657 10.5657C12.3677 10.3677 12.2687 10.2687 12.1545 10.2316C12.0541 10.1989 11.9459 10.1989 11.8455 10.2316C11.7313 10.2687 11.6323 10.3677 11.4343 10.5657L7 15M21 7H17M21 7V11'
                  stroke='white'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                ></path>{' '}
              </g>
            </svg>
            <p className='text-center'>
              Conozca las últimas tendencias e innovaciones tecnológicas del
              sector.
            </p>
          </div>
          <div className='grid place-items-center'>
            <svg
              fill='white'
              viewBox='0 -3.19 54.13 54.13'
              id='Layer_1'
              width='80'
              stroke='white'
            >
              <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
              <g
                id='SVGRepo_tracerCarrier'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></g>
              <g id='SVGRepo_iconCarrier'>
                <title>cogs</title>
                <path
                  d='M59.77,37.11l-.41-1c1.4-3.17,1.31-3.27,1-3.54l-1.79-1.75-.18-.15h-.21c-.11,0-.44,0-3.16,1.23l-1-.4c-1.3-3.21-1.43-3.21-1.81-3.21H49.72c-.38,0-.52,0-1.73,3.22l-1,.4a17.37,17.37,0,0,0-3.21-1.17h-.24l-1.93,1.89c-.29.28-.39.37,1.09,3.49l-.41,1C39,38.4,39,38.52,39,38.91v2.48c0,.39,0,.52,3.29,1.7l.41,1c-1.4,3.17-1.31,3.26-1,3.54l1.8,1.75.17.15h.21c.11,0,.43,0,3.16-1.24l1,.41c1.3,3.21,1.43,3.21,1.81,3.21h2.53c.38,0,.52,0,1.73-3.22l1-.41a17,17,0,0,0,3.2,1.18h.24l1.95-1.9c.27-.28.37-.38-1.11-3.49l.41-1c3.29-1.27,3.29-1.41,3.29-1.79V38.81C63.07,38.42,63.07,38.28,59.77,37.11ZM51,44.22a4.12,4.12,0,1,1,4.2-4.12A4.16,4.16,0,0,1,51,44.22Z'
                  transform='translate(-8.93 -4.12)'
                ></path>
                <path
                  d='M36,22.79l-.53-1.27c1.83-4.14,1.71-4.26,1.35-4.62l-2.34-2.29-.23-.19H34c-.14,0-.57,0-4.13,1.61l-1.31-.53c-1.69-4.19-1.86-4.19-2.36-4.19h-3.3c-.49,0-.68,0-2.25,4.21l-1.31.53a21.5,21.5,0,0,0-4.19-1.53h-.31L12.33,17c-.38.36-.51.49,1.42,4.57l-.53,1.26c-4.29,1.66-4.29,1.82-4.29,2.32v3.24c0,.51,0,.69,4.3,2.23l.54,1.26c-1.83,4.13-1.71,4.26-1.36,4.61l2.34,2.29L15,39h.27c.14,0,.56,0,4.12-1.61l1.31.53c1.69,4.19,1.86,4.19,2.36,4.19h3.3c.51,0,.69,0,2.26-4.21l1.31-.53a21.5,21.5,0,0,0,4.19,1.53h.31L37,36.38c.36-.36.48-.49-1.44-4.55l.53-1.26c4.29-1.66,4.29-1.83,4.29-2.33V25C40.34,24.5,40.34,24.32,36,22.79ZM24.64,32.08a5.39,5.39,0,1,1,5.48-5.39A5.46,5.46,0,0,1,24.64,32.08Z'
                  transform='translate(-8.93 -4.12)'
                ></path>
                <path
                  d='M58,11.62l-.35-.83c1.2-2.71,1.12-2.79.89-3L57,6.28l-.15-.13h-.18A9.91,9.91,0,0,0,54,7.2l-.86-.34c-1.1-2.74-1.22-2.74-1.54-2.74H49.47c-.33,0-.45,0-1.48,2.75l-.85.34a14.14,14.14,0,0,0-2.74-1h-.2L42.56,7.83c-.25.24-.34.32.92,3l-.34.83c-2.8,1.08-2.8,1.18-2.8,1.51v2.12c0,.33,0,.45,2.8,1.45l.35.82c-1.19,2.71-1.11,2.79-.88,3l1.53,1.49.15.14h.18a10,10,0,0,0,2.69-1.06l.85.35c1.11,2.73,1.22,2.73,1.55,2.73h2.15c.33,0,.45,0,1.48-2.74l.85-.35a14.89,14.89,0,0,0,2.73,1H57l1.66-1.62c.23-.23.31-.32-.94-3L58,16.7c2.8-1.09,2.8-1.2,2.8-1.52V13.07C60.84,12.73,60.84,12.62,58,11.62Zm-7.44,6.06a3.52,3.52,0,1,1,3.58-3.51A3.56,3.56,0,0,1,50.59,17.68Z'
                  transform='translate(-8.93 -4.12)'
                ></path>
              </g>
            </svg>
            <p className='text-center'>
              Aprenda en el mejor programa internacional de conferencias y
              talleres.
            </p>
          </div>
          <div className='grid place-items-center'>
            <svg viewBox='0 0 24 24' fill='none' width='80'>
              <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
              <g
                id='SVGRepo_tracerCarrier'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></g>
              <g id='SVGRepo_iconCarrier'>
                {' '}
                <path
                  fillRule='evenodd'
                  clipule='evenodd'
                  d='M8.25 9C8.25 6.92893 9.92893 5.25 12 5.25C14.0711 5.25 15.75 6.92893 15.75 9C15.75 11.0711 14.0711 12.75 12 12.75C9.92893 12.75 8.25 11.0711 8.25 9ZM12 6.75C10.7574 6.75 9.75 7.75736 9.75 9C9.75 10.2426 10.7574 11.25 12 11.25C13.2426 11.25 14.25 10.2426 14.25 9C14.25 7.75736 13.2426 6.75 12 6.75Z'
                  fill='white'
                ></path>{' '}
                <path
                  fillRule='evenodd'
                  clipule='evenodd'
                  d='M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 14.5456 3.77827 16.851 5.4421 18.5235C5.6225 17.5504 5.97694 16.6329 6.68837 15.8951C7.75252 14.7915 9.45416 14.25 12 14.25C14.5457 14.25 16.2474 14.7915 17.3115 15.8951C18.023 16.6329 18.3774 17.5505 18.5578 18.5236C20.2217 16.8511 21.25 14.5456 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM17.1937 19.6554C17.0918 18.4435 16.8286 17.5553 16.2318 16.9363C15.5823 16.2628 14.3789 15.75 12 15.75C9.62099 15.75 8.41761 16.2628 7.76815 16.9363C7.17127 17.5553 6.90811 18.4434 6.80622 19.6553C8.28684 20.6618 10.0747 21.25 12 21.25C13.9252 21.25 15.7131 20.6618 17.1937 19.6554Z'
                  fill='white'
                ></path>{' '}
              </g>
            </svg>
            <p className='text-center'>
              Genere alianzas estratégicas dentro del sector más relevante del
              país.
            </p>
          </div>
          <div className='grid place-items-center'>
            <svg fill='white' viewBox='0 0 512 512' width='80'>
              <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
              <g
                id='SVGRepo_tracerCarrier'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></g>
              <g id='SVGRepo_iconCarrier'>
                <path d='M149.333 56v80c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24h101.333c13.255 0 24 10.745 24 24zm181.334 240v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm32-240v80c0 13.255 10.745 24 24 24H488c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24zm-32 80V56c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm-205.334 56H24c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24zM0 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm386.667-56H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zm0 160H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zM181.333 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24z'></path>
              </g>
            </svg>
            <p className='text-center'>
              Tome la delantera en los negocios del futuro.
            </p>
          </div>
        </div>
        <div
          ref={ref}
          className='mt-10 flex flex-wrap flex-1 gap-40 justify-center'
        >
          {show && (
            <>
              <div>
                <Bullets number='250' duration='4' />
                <div className='text-center font-bold'>
                  <i className='text-2xl'>Expositores</i>
                </div>
              </div>
              <div>
                <Bullets number='13,000' duration='4' simbol='m2' />
                <div className='text-center font-bold'>
                  <i className='text-2xl'>Piso expositor</i>
                </div>
              </div>
              <div>
                <Bullets number='4' duration='4' />
                <div className='text-center font-bold'>
                  <i className='text-2xl'>Pabellones Internacionales</i>
                </div>
              </div>
              <div>
                <Bullets number='15,000' duration='4' />
                <div className='text-center font-bold'>
                  <i className='text-2xl'>simbol='m2'</i>
                </div>
              </div>
              <div>
                <Bullets number='1,370' duration='4' simbol='MDP' />
                <div className='text-center font-bold '>
                  <i className='text-2xl'>de negocios en sitio</i>
                </div>
              </div>
              <div>
                <Bullets number='260' duration='4' simbol='MDP' />
                <div className='text-center font-bold '>
                  <i className='text-2xl'>en valor de cobertura mediatica</i>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
