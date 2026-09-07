import { useState } from 'react'
import { aiEnvironment as data } from '../data/aiEnvironment'
import Icon from './Icon'
import Reveal from './Reveal'
import SkillBadge from './SkillBadge'

export default function AIEnvironment() {
  const [activeId, setActiveId] = useState(data.workflows[0].id)
  const active = data.workflows.find((item) => item.id === activeId)

  return (
    <section id="ai-environment" className="section-space scroll-mt-16 bg-white" aria-labelledby="ai-environment-title">
      <div className="page-container">
        <Reveal className="mb-8 sm:mb-10">
          <p className="eyebrow">{data.eyebrow}</p>
          <h2 id="ai-environment-title" className="section-title">{data.title}</h2>
        </Reveal>
        <Reveal>
          <div className="grid gap-8 overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 sm:p-9 lg:grid-cols-2 lg:items-center lg:gap-12">
            <div>
              <p className="text-xs font-bold tracking-wider text-lime">{data.name}</p>
              <h3 className="mt-4 whitespace-pre-line text-2xl font-bold leading-snug text-ink sm:text-3xl">{data.headline}</h3>
              <p className="mt-5 text-sm leading-7 text-muted">{data.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">{data.tags.map((tag) => <SkillBadge key={tag} tone="blue">{tag}</SkillBadge>)}</div>
              <a href={data.github} target="_blank" rel="noreferrer" className="focus-ring mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-80">{data.linkLabel}<Icon name="external" size={15} /></a>
            </div>
            <div className="rounded-2xl border border-line bg-white/90 p-5 sm:p-6">
              <h4 className="mb-5 text-sm font-semibold text-ink">{data.flowTitle}</h4>
              <ol className="space-y-4">
                {data.flow.map((step, index) => (
                  <li key={step.title} className="flex gap-4">
                    <div className="flex shrink-0 flex-col items-center"><span className="flex size-8 items-center justify-center rounded-lg bg-blue-50 text-xs font-bold text-lime">{String(index + 1).padStart(2, '0')}</span>{index < data.flow.length - 1 && <span className="mt-2 w-px flex-1 bg-blue-100" aria-hidden="true" />}</div>
                    <div className="pb-3"><p className="text-sm font-semibold text-ink">{step.title}</p><p className="mt-1 text-xs leading-6 text-muted">{step.description}</p></div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Reveal>
        <Reveal className="mt-9"><h3 className="text-lg font-bold text-ink">{data.structureTitle}</h3></Reveal>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {data.structure.map((item, index) => (
            <Reveal key={item.title} delay={index * 70} className="h-full">
              <article className="card h-full p-6">
                <span className="flex size-10 items-center justify-center rounded-xl bg-blue-50 text-lime"><Icon name={item.icon} size={20} /></span>
                <h4 className="mt-4 font-bold text-ink">{item.title}</h4>
                <p className="mt-2 break-words font-mono text-[11px] leading-5 text-lime">{item.path}</p>
                <p className="mt-3 text-sm leading-6 text-muted">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-line bg-[#f7f8fa] p-6 sm:p-8">
            <h3 className="text-lg font-bold text-ink">{data.workflowTitle}</h3>
            <p className="mt-2 text-sm leading-6 text-muted">{data.workflowDescription}</p>
            <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label={data.workflowTitle}>
              {data.workflows.map((workflow) => <button key={workflow.id} type="button" aria-pressed={activeId === workflow.id} aria-controls="ai-workflow-content" onClick={() => setActiveId(workflow.id)} className={`focus-ring rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${activeId === workflow.id ? 'border-lime bg-lime text-white' : 'border-line bg-white text-muted hover:border-blue-200 hover:text-ink'}`}>{workflow.label}</button>)}
            </div>
            <div id="ai-workflow-content" aria-live="polite" aria-atomic="true" className="mt-5">
              <p className="text-sm leading-6 text-ink">{active.description}</p>
              <ol className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
                {active.steps.map((step, index) => <li key={step} className="flex items-center gap-2"><span className="rounded-lg border border-line bg-white px-3 py-2 text-xs font-medium text-ink"><span className="mr-2 text-lime">{index + 1}.</span>{step}</span>{index < active.steps.length - 1 && <span className="hidden text-muted sm:inline" aria-hidden="true">→</span>}</li>)}
              </ol>
              <p className="mt-4 text-xs leading-6 text-muted">{active.note}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
