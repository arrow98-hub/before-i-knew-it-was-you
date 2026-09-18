import { useEffect, useRef } from 'react'
import { Atmosphere, Thread } from '../components/Atmosphere'
import { Progress } from '../components/Progress'
import { story } from '../content/story'
import { useStoryMotion } from '../lib/useStoryMotion'
import { ScrollStory } from '../components/ScrollStory'

function Chapter({ number, title, children, mood, id }: { number:string; title:string; children:React.ReactNode; mood:string; id:string }) { return <section id={id} className={`chapter ${mood}`}><div className="chapter-label"><span>{number}</span><span>{title}</span></div>{children}</section> }
function SceneTransition({ tone }: { tone: string }) { return <div className={`scene-transition ${tone}`} aria-hidden="true"><i className="scene-transition__veil" /></div> }

export function Story() {
  const root = useRef<HTMLElement>(null)
  useEffect(() => { document.documentElement.style.scrollBehavior = 'smooth' }, [])
  useStoryMotion(root)
  return <main ref={root}>
    <Progress />
    <section className="hero" aria-labelledby="title">
      <img className="hero-image" src="/images/hero-mountain.jpg" alt="Figura solitaria ante una montaña iluminada por la luna" />
      <div className="hero-sky" />
      <div className="hero-copy"><p className="eyebrow">Una historia en seis capítulos</p><h1 id="title">Before I knew<br /><em>it was you</em></h1><p className="hero-spanish">Antes de saber que eras tú</p></div><div className="scroll-cue">desliza para recordar <span>↓</span></div>
    </section>
    <Chapter id="prologue" number="00" title="Prólogo" mood="prologue"><p className="kicker">Antes de saber que eras tú</p><ScrollStory lines={story.prologue} /><p className="te-vi">te vi.</p></Chapter><SceneTransition tone="to-light" />
    <Chapter id="looks" number="I" title="Las miradas" mood="looks"><div className="aurora" /><ScrollStory lines={story.looks} /></Chapter><SceneTransition tone="to-cold" />
    <Chapter id="almost" number="II" title="El casi" mood="almost"><div className="liquid" /><ScrollStory lines={story.almost} /><p className="date">2 de junio.</p></Chapter><SceneTransition tone="to-thread" />
    <Chapter id="return" number="III" title="El día que volvimos a encontrarnos" mood="return"><div className="threads-bg" /><ScrollStory lines={story.return} /><p className="date blue">18 de agosto.</p></Chapter><SceneTransition tone="to-red" />
    <section className="interlude" aria-label="El hilo rojo"><Thread /><div className="interlude-copy"><p>Nos conocimos.</p><p>Nos perdimos.</p><p>Seguimos nuestras vidas.</p><p>Pasó el tiempo.</p><p>Volvimos a hablar.</p><p>Volvimos a sonreír.</p><p>Volvimos a elegirnos.</p><h2>Quizás nunca estuvimos<br />realmente separados.</h2><p className="long">Quizás simplemente estábamos siguiendo caminos que todavía tenían que volver a encontrarse.</p><p className="arrival">Y entonces llegamos aquí.</p></div></section><SceneTransition tone="to-stars" />
    <Chapter id="august" number="IV" title="18 de agosto" mood="august"><Atmosphere variant="stars" /><ScrollStory lines={['Llegó el día. Nuestra primera cita.', 'Comimos. Reímos. Hablamos.', 'Y probablemente ninguno de los dos quería que aquella noche terminara.', 'Pero todavía quedaba un lugar.', 'Un lago. Un muelle. La noche. Las estrellas. Y nosotros dos.', 'Hay momentos que parecen sencillos mientras los estás viviendo. Y solo después entiendes que estabas viviendo algo que algún día ibas a querer recordar para siempre.', 'Aquella noche fue uno de esos momentos.', 'Después de todo lo que habíamos vivido… yo quería elegirte.']}/><div className="question"><span>Así que aquella noche…</span><h2>¿Quieres ser<br />mi novia?</h2><p>Y dijiste que sí.</p></div><p className="date">18 de agosto.</p><p className="caption">La noche en la que elegimos caminar juntos.</p></Chapter><SceneTransition tone="to-rose" />
    <Chapter id="us" number="V" title="Nosotros" mood="us"><div className="rose" /><ScrollStory lines={story.us} /></Chapter><SceneTransition tone="to-cosmos" />
    <Chapter id="future" number="VI" title="Esta historia apenas comienza" mood="future"><Atmosphere variant="stars" /><ScrollStory lines={story.future} /></Chapter><SceneTransition tone="to-black" />
    <section className="surprise"><Atmosphere variant="stars" /><div><p>Pero hay algo que todavía no te he contado sobre aquella noche.</p><p>Quiero que vuelvas conmigo a ese cielo.</p><p>Porque mientras nosotros hablábamos aquella noche…</p><h2>el universo también<br />estaba ahí.</h2><div className="gift"><p>Quería regalarte algo que pudiera guardar aquel momento para siempre.</p><p>La posición exacta de las estrellas sobre nosotros aquella noche.</p><p>Para que, aunque pasen los años… siempre podamos volver al lugar donde comenzó este capítulo.</p></div></div></section><SceneTransition tone="to-end" />
    <footer><Atmosphere variant="particles" /><div><p className="date">18 de agosto.</p><h2>El comienzo de todo lo que todavía nos queda por vivir.</h2><p className="signature">Antes de saber que eras tú.</p></div></footer>
  </main>
}
