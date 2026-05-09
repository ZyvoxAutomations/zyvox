import { useState } from "react";
import { Slider } from "@/components/ui/slider";

const CalculatorSection = () => {
  const [callsPerDay, setCallsPerDay] = useState(25);
  const [missedPct, setMissedPct] = useState(20);
  const [avgRevenue, setAvgRevenue] = useState(85);

  const missedPerDay = Math.round(callsPerDay * (missedPct / 100));
  const monthlyLost = Math.round(missedPerDay * avgRevenue * 22);
  const annualLost = monthlyLost * 12;

  return (
    <section className="py-20 md:py-28">
      <div className="container max-w-4xl">
        <p className="text-sm font-semibold text-brand-gold text-center mb-3 uppercase tracking-[0.2em]">ROI Estimator</p>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Estimate revenue leakage from missed communication
        </h2>
        <p className="text-center text-muted-foreground mb-16">
          Use your clinic's numbers to model the monthly impact of missed inquiries and delayed follow-up.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="font-semibold text-lg text-foreground">Practice Profile</h3>

            <div>
              <div className="flex justify-between mb-3">
                <label className="text-sm text-foreground">Calls per day</label>
                <span className="text-sm font-semibold text-brand-navy">{callsPerDay}</span>
              </div>
              <Slider value={[callsPerDay]} onValueChange={(v) => setCallsPerDay(v[0])} min={5} max={100} step={1} />
            </div>

            <div>
              <div className="flex justify-between mb-3">
                <label className="text-sm text-foreground">Percentage of missed calls</label>
                <span className="text-sm font-semibold text-brand-navy">{missedPct}%</span>
              </div>
              <Slider value={[missedPct]} onValueChange={(v) => setMissedPct(v[0])} min={5} max={50} step={1} />
            </div>

            <div>
              <div className="flex justify-between mb-3">
                <label className="text-sm text-foreground">Average revenue per appointment</label>
                <span className="text-sm font-semibold text-brand-navy">£{avgRevenue}</span>
              </div>
              <Slider value={[avgRevenue]} onValueChange={(v) => setAvgRevenue(v[0])} min={30} max={300} step={5} />
            </div>
          </div>

          <div className="rounded-2xl bg-secondary border border-border p-8">
            <h3 className="font-semibold text-lg text-foreground mb-6">Potential Recovery</h3>

            <div className="flex items-center gap-3 mb-8">
              <span className="text-3xl font-bold text-brand-navy">{missedPct}%</span>
              <span className="text-sm text-muted-foreground">missed</span>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-baseline">
                <span className="text-sm text-muted-foreground">Monthly revenue lost</span>
                <span className="text-2xl font-bold text-foreground">£{monthlyLost.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-sm text-muted-foreground">Annual revenue lost</span>
                <span className="text-2xl font-bold text-foreground">£{annualLost.toLocaleString()}</span>
              </div>
            </div>

            <a href="#cta" className="mt-8 block text-center py-3 rounded-lg bg-brand-navy text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity">
              Plan recovery for £{monthlyLost.toLocaleString()}/month
            </a>

            <p className="text-xs text-muted-foreground mt-4">* Estimates use monthly averages and should be validated with your internal data.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
