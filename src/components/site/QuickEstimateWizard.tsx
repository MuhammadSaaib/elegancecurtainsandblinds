import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Cog, Hand, Ruler, Sparkles, Sun } from "lucide-react";

type Fabric = "sheer" | "blackout";
type Control = "manual" | "motorized";

const STEPS = ["Dimensions", "Fabric", "Control", "Estimate"] as const;

export function QuickEstimateWizard() {
  const [step, setStep] = useState(0);
  const [width, setWidth] = useState<number>(2);
  const [height, setHeight] = useState<number>(2.7);
  const [fabric, setFabric] = useState<Fabric | null>(null);
  const [control, setControl] = useState<Control | null>(null);

  const progress = ((step + 1) / STEPS.length) * 100;

  const { low, high } = useMemo(() => {
    const area = Math.max(0.5, width) * Math.max(0.5, height);
    const fabricRate = fabric === "blackout" ? 340 : 220; // AED per m² incl. wave fullness 1:2.5
    const controlAdd = control === "motorized" ? 750 : 0;
    const base = area * fabricRate + controlAdd;
    return {
      low: Math.max(400, Math.round((base * 0.9) / 25) * 25),
      high: Math.max(500, Math.round((base * 1.15) / 25) * 25),
    };
  }, [width, height, fabric, control]);

  const canNext =
    (step === 0 && width >= 0.3 && height >= 0.3) ||
    (step === 1 && fabric !== null) ||
    (step === 2 && control !== null);

  return (
    <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-white p-6 md:p-10 shadow-[var(--shadow-luxury)]">
      {/* Progress */}
      <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
        <span>Step {step + 1} of {STEPS.length}</span>
        <span className="text-primary font-semibold">{STEPS[step]}</span>
      </div>
      <div className="mt-3 h-[3px] w-full overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full bg-accent transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="mt-8 min-h-[360px]">
        {step === 0 && (
          <StepDimensions
            width={width}
            height={height}
            setWidth={setWidth}
            setHeight={setHeight}
          />
        )}
        {step === 1 && <StepFabric value={fabric} onChange={setFabric} />}
        {step === 2 && <StepControl value={control} onChange={setControl} />}
        {step === 3 && (
          <StepSummary
            low={low}
            high={high}
            width={width}
            height={height}
            fabric={fabric}
            control={control}
          />
        )}
      </div>

      {/* Nav */}
      <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
        {step > 0 ? (
          <button
            type="button"
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary hover:border-accent"
          >
            <ArrowLeft className="h-4 w-4" /> Back
          </button>
        ) : (
          <span className="hidden sm:block" />
        )}

        {step < STEPS.length - 1 ? (
          <button
            type="button"
            disabled={!canNext}
            onClick={() => setStep((s) => Math.min(STEPS.length - 1, s + 1))}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground hover:bg-royal disabled:cursor-not-allowed disabled:opacity-40"
          >
            {step === STEPS.length - 2 ? "Calculate" : "Next"}
            <ArrowRight className="h-4 w-4" />
          </button>
        ) : (
          <Link
            to="/book"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Book Free Home Visit <ArrowRight className="h-4 w-4" />
          </Link>
        )}
      </div>
    </div>
  );
}

/* ---------- Step 1 ---------- */
function StepDimensions({
  width,
  height,
  setWidth,
  setHeight,
}: {
  width: number;
  height: number;
  setWidth: (n: number) => void;
  setHeight: (n: number) => void;
}) {
  return (
    <div className="grid gap-8 md:grid-cols-[1fr_1fr] items-center">
      <div className="flex items-center justify-center">
        <WindowDiagram width={width} height={height} />
      </div>
      <div>
        <p className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-accent">
          <Ruler className="h-4 w-4" /> Window Dimensions
        </p>
        <h3 className="mt-3 font-display text-2xl md:text-3xl text-primary leading-tight">
          Tell us the size of your window
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Rough estimates are fine — we'll take exact measurements during your free
          home visit.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-4">
          <NumberField label="Width (m)" value={width} onChange={setWidth} />
          <NumberField label="Height (m)" value={height} onChange={setHeight} />
        </div>
      </div>
    </div>
  );
}

function NumberField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (n: number) => void;
}) {
  return (
    <label className="block">
      <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
        {label}
      </span>
      <input
        type="number"
        inputMode="decimal"
        step="0.1"
        min="0.3"
        value={value}
        onChange={(e) => onChange(Number(e.target.value) || 0)}
        className="mt-1.5 w-full rounded-xl border border-border bg-white px-4 py-4 text-lg font-semibold text-primary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
      />
    </label>
  );
}

function WindowDiagram({ width, height }: { width: number; height: number }) {
  return (
    <svg viewBox="0 0 220 240" className="w-full max-w-[240px] text-primary">
      {/* Width indicator top */}
      <line x1="30" y1="18" x2="200" y2="18" stroke="currentColor" strokeWidth="1" />
      <line x1="30" y1="12" x2="30" y2="24" stroke="currentColor" strokeWidth="1" />
      <line x1="200" y1="12" x2="200" y2="24" stroke="currentColor" strokeWidth="1" />
      <text x="115" y="12" textAnchor="middle" className="fill-primary" style={{ fontSize: 11, fontWeight: 600 }}>
        W · {width.toFixed(1)}m
      </text>

      {/* Height indicator right */}
      <line x1="210" y1="34" x2="210" y2="220" stroke="currentColor" strokeWidth="1" />
      <line x1="204" y1="34" x2="216" y2="34" stroke="currentColor" strokeWidth="1" />
      <line x1="204" y1="220" x2="216" y2="220" stroke="currentColor" strokeWidth="1" />
      <text
        x="210"
        y="127"
        textAnchor="middle"
        transform="rotate(90 210 127)"
        className="fill-primary"
        style={{ fontSize: 11, fontWeight: 600 }}
      >
        H · {height.toFixed(1)}m
      </text>

      {/* Window frame */}
      <rect x="30" y="34" width="170" height="186" fill="var(--secondary)" stroke="currentColor" strokeWidth="2" rx="2" />
      <line x1="115" y1="34" x2="115" y2="220" stroke="currentColor" strokeWidth="2" />
      <line x1="30" y1="127" x2="200" y2="127" stroke="currentColor" strokeWidth="2" />

      {/* Sill */}
      <rect x="22" y="220" width="186" height="6" fill="currentColor" opacity="0.15" />
    </svg>
  );
}

/* ---------- Step 2 ---------- */
function StepFabric({
  value,
  onChange,
}: {
  value: Fabric | null;
  onChange: (v: Fabric) => void;
}) {
  return (
    <div>
      <p className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-accent">
        <Sparkles className="h-4 w-4" /> Fabric Type
      </p>
      <h3 className="mt-3 font-display text-2xl md:text-3xl text-primary leading-tight">
        Choose the fabric that suits your space
      </h3>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <ChoiceCard
          selected={value === "sheer"}
          onClick={() => onChange("sheer")}
          title="Sheer / Voile"
          subtitle="Allows soft, diffused light"
          icon={<Sun className="h-6 w-6" />}
          preview="sheer"
        />
        <ChoiceCard
          selected={value === "blackout"}
          onClick={() => onChange("blackout")}
          title="Blackout Fabric"
          subtitle="100% privacy & light control"
          icon={<Sparkles className="h-6 w-6" />}
          preview="blackout"
        />
      </div>
    </div>
  );
}

/* ---------- Step 3 ---------- */
function StepControl({
  value,
  onChange,
}: {
  value: Control | null;
  onChange: (v: Control) => void;
}) {
  return (
    <div>
      <p className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-accent">
        <Cog className="h-4 w-4" /> Control Type
      </p>
      <h3 className="mt-3 font-display text-2xl md:text-3xl text-primary leading-tight">
        How would you like to operate them?
      </h3>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <ChoiceCard
          selected={value === "manual"}
          onClick={() => onChange("manual")}
          title="Manual Track"
          subtitle="Smooth hand-drawn operation"
          icon={<Hand className="h-6 w-6" />}
        />
        <ChoiceCard
          selected={value === "motorized"}
          onClick={() => onChange("motorized")}
          title="Motorized Track"
          subtitle="Smart-home & remote controlled"
          icon={<Cog className="h-6 w-6" />}
        />
      </div>
    </div>
  );
}

function ChoiceCard({
  selected,
  onClick,
  title,
  subtitle,
  icon,
  preview,
}: {
  selected: boolean;
  onClick: () => void;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  preview?: "sheer" | "blackout";
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative overflow-hidden rounded-2xl border-2 p-6 text-left transition-all ${
        selected
          ? "border-accent bg-accent/5 shadow-[var(--shadow-card)]"
          : "border-border bg-white hover:border-accent/60"
      }`}
    >
      {preview && (
        <div
          aria-hidden
          className={`absolute inset-x-0 top-0 h-24 ${
            preview === "sheer"
              ? "bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(248,246,243,0.4))]"
              : "bg-[linear-gradient(180deg,#0a2a5e,#041636)]"
          }`}
        />
      )}
      <div className={`relative ${preview ? "mt-16" : ""}`}>
        <div className="flex items-center justify-between">
          <span
            className={`grid h-12 w-12 place-items-center rounded-full ${
              selected ? "bg-accent text-accent-foreground" : "bg-secondary text-primary"
            }`}
          >
            {icon}
          </span>
          {selected && (
            <span className="grid h-7 w-7 place-items-center rounded-full bg-accent text-accent-foreground">
              <Check className="h-4 w-4" />
            </span>
          )}
        </div>
        <h4 className="mt-5 font-display text-xl text-primary">{title}</h4>
        <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
      </div>
    </button>
  );
}

/* ---------- Step 4 ---------- */
function StepSummary({
  low,
  high,
  width,
  height,
  fabric,
  control,
}: {
  low: number;
  high: number;
  width: number;
  height: number;
  fabric: Fabric | null;
  control: Control | null;
}) {
  return (
    <div className="rounded-2xl bg-primary p-8 md:p-10 text-primary-foreground">
      <p className="text-[11px] uppercase tracking-[0.24em] text-accent">
        Your Estimated Investment
      </p>
      <div className="mt-3 font-display text-4xl md:text-5xl leading-tight">
        AED {low.toLocaleString()} – {high.toLocaleString()}
        <span className="text-lg align-top opacity-70">*</span>
      </div>
      <p className="mt-2 text-sm text-white/70">
        *Based on premium 1:2.5 wave fullness ratio for perfect folds.
      </p>

      <ul className="mt-6 grid gap-2 text-sm text-white/85 sm:grid-cols-2">
        <li className="flex items-center gap-2"><Check className="h-4 w-4 text-accent" /> {width}m × {height}m window</li>
        <li className="flex items-center gap-2"><Check className="h-4 w-4 text-accent" /> {fabric === "blackout" ? "Blackout fabric" : "Sheer / voile fabric"}</li>
        <li className="flex items-center gap-2"><Check className="h-4 w-4 text-accent" /> {control === "motorized" ? "Motorized track" : "Manual track"}</li>
        <li className="flex items-center gap-2"><Check className="h-4 w-4 text-accent" /> Installation & delivery included</li>
      </ul>

      <p className="mt-6 rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-xs text-white/70">
        Exact price depends on your final fabric choice from our catalog. Your
        designer will confirm during the free home visit.
      </p>
    </div>
  );
}
