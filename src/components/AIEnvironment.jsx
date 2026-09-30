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
        <Reveal animate className="mb-8 sm:mb-10">
          <h2 id="ai-environment-title" className="section-title">{data.title}</h2>
        </Reveal>
        <Reveal animate>
          <div className="grid gap-8 border-y border-line py-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <p className="text-sm font-semibold text-accent">{data.name}</p>
              <h3 className="mt-4 whitespace-pre-line text-2xl font-bold leading-snug text-ink sm:text-3xl">{data.headline}</h3>
              <p className="mt-5 text-base leading-7 text-muted">{data.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">{data.tags.map((tag) => <SkillBadge key={tag} tone="blue">{tag}</SkillBadge>)}</div>
              <a href={data.github} target="_blank" rel="noreferrer" className="focus-ring text-link mt-5">{data.linkLabel}<Icon name="external" size={14} /><span className="sr-only"> (새 탭에서 열기)</span></a>
            </div>
            <div className="lg:border-l lg:border-line lg:pl-10">
              <h4 className="mb-5 text-base font-semibold text-ink">{data.flowTitle}</h4>
              <ol className="space-y-4">
                {data.flow.map((step, index) => (
                  <li key={step.title} className="flex gap-4">
                    <div className="flex shrink-0 flex-col items-center"><span className="flex size-7 items-center justify-center text-sm font-semibold tabular-nums text-accent">{index + 1}</span>{index < data.flow.length - 1 && <span className="mt-2 w-px flex-1 bg-line" aria-hidden="true" />}</div>
                    <div className="pb-3"><p className="text-base font-semibold text-ink">{step.title}</p><p className="mt-1 text-sm leading-6 text-muted">{step.description}</p></div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Reveal>
        <Reveal animate className="mt-8"><h3 className="text-lg font-semibold text-ink">{data.structureTitle}</h3></Reveal>
        <div className="mt-5 grid gap-x-10 md:grid-cols-2">
          {data.structure.map((item) => (
            <Reveal key={item.title} animate className="h-full">
              <article className="h-full border-t border-line py-6">
                <h4 className="flex items-center gap-3 font-semibold text-ink"><Icon name={item.icon} size={20} className="shrink-0 text-muted" />{item.title}</h4>
                <p className="mt-3 break-words font-mono text-[13px] leading-6 text-accent">{item.path}</p>
                <p className="mt-3 text-base leading-7 text-muted">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal animate className="mt-8">
          <div className="border-t border-line pt-8">
            <h3 className="text-lg font-semibold text-ink">{data.workflowTitle}</h3>
            <p className="mt-2 text-base leading-7 text-muted">{data.workflowDescription}</p>
            <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label={data.workflowTitle}>
              {data.workflows.map((workflow) => <button key={workflow.id} type="button" aria-pressed={activeId === workflow.id} aria-controls="ai-workflow-content" onClick={() => setActiveId(workflow.id)} className={`focus-ring pressable workflow-switch min-h-11 rounded-lg border px-4 py-2 text-sm font-medium ${activeId === workflow.id ? 'border-accent bg-accent-soft text-accent' : 'border-line bg-white text-muted'}`}>{workflow.label}</button>)}
            </div>
            <div id="ai-workflow-content" aria-live="polite" aria-atomic="true" className="mt-5">
              <p className="text-base leading-7 text-ink">{active.description}</p>
              <ol className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
                {active.steps.map((step, index) => <li key={step} className="flex items-center gap-3 py-1"><span className="text-sm leading-6 font-medium text-ink"><span className="mr-2 tabular-nums text-accent">{index + 1}.</span>{step}</span>{index < active.steps.length - 1 && <Icon name="arrow" size={14} className="hidden shrink-0 text-muted sm:block" />}</li>)}
              </ol>
              <p className="mt-4 text-sm leading-6 text-muted">{active.note}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
