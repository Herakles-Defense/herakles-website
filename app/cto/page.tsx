import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CTOPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24">
        {/* Hero */}
        <section className="section-padding bg-gradient-to-b from-primary to-secondary">
          <div className="container-custom max-w-4xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Join Herakles as <span className="text-accent">CTO / Technical Co-Founder</span>
            </h1>
            <p className="text-xl text-neutral/80 mb-8">
              Build the future of Counter-UAS defense technology. Shape a product that saves lives.
            </p>
          </div>
        </section>

        {/* The Opportunity */}
        <section className="section-padding bg-secondary">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              The Opportunity
            </h2>
            <div className="space-y-6 text-lg text-neutral/80">
              <p>
                FPV kamikaze drones have become the dominant tactical weapon in asymmetric conflicts.
                They cost $300-700 and cause over <strong className="text-accent">42% of all verified vehicle losses</strong> in the Ukraine conflict.
              </p>
              <p>
                Current solutions fail. Electronic countermeasures don't work against fiber-optic FPVs.
                Existing kinetic systems are either too expensive, too heavy, or designed for the wrong threat class.
              </p>
              <p className="text-accent font-semibold text-xl">
                Herakles is building the first decentralized, AI-powered interceptor system specifically for infantry protection against FPV threats.
              </p>
            </div>
          </div>
        </section>

        {/* The Mission */}
        <section className="section-padding bg-primary">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Your Mission
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-accent">Lead Technical Development</h3>
                <p className="text-neutral/80">
                  Own the entire technical stack: Edge AI, flight controller, acoustic detection, autonomous guidance systems.
                </p>
              </div>
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-accent">Build the Team</h3>
                <p className="text-neutral/80">
                  Recruit and lead a world-class engineering team. Set technical standards and culture from day one.
                </p>
              </div>
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-accent">Shape Product Strategy</h3>
                <p className="text-neutral/80">
                  Work directly with defense industry partners. Translate military requirements into technical solutions.
                </p>
              </div>
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-accent">Scale Production</h3>
                <p className="text-neutral/80">
                  Design for manufacturability. Build supply chains. Ensure quality at scale.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Stack */}
        <section className="section-padding bg-secondary">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              The Technical Challenge
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-accent">Core Technologies</h3>
                <ul className="space-y-3 text-lg text-neutral/80">
                  <li className="flex items-start">
                    <span className="text-accent mr-3">→</span>
                    <span><strong>Edge AI:</strong> Real-time visual tracking (YOLOv8, sub-10ms inference on Hailo-8 NPU)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3">→</span>
                    <span><strong>Flight Control:</strong> Custom firmware, 8kHz IMU loop, Proportional Navigation guidance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3">→</span>
                    <span><strong>Acoustic Detection:</strong> AI-based drone signature recognition, triangulation algorithms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3">→</span>
                    <span><strong>Sensor Fusion:</strong> Kalman filtering, GPS/IMU/Vision integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3">→</span>
                    <span><strong>Embedded Systems:</strong> STM32H7, MIPI CSI, low-latency pipelines</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Who We're Looking For */}
        <section className="section-padding bg-primary">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Who We're Looking For
            </h2>
            <div className="space-y-4 text-lg text-neutral/80">
              <p className="text-xl font-semibold text-accent mb-6">
                You don't need to check every box. If you're exceptional in a few areas and hungry to learn the rest, let's talk.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <span className="text-accent mr-3">✓</span>
                  <span>Deep expertise in robotics, drones, or autonomous systems</span>
                </div>
                <div className="flex items-start">
                  <span className="text-accent mr-3">✓</span>
                  <span>Experience with real-time embedded systems</span>
                </div>
                <div className="flex items-start">
                  <span className="text-accent mr-3">✓</span>
                  <span>Strong foundation in CV/ML (PyTorch, TensorFlow)</span>
                </div>
                <div className="flex items-start">
                  <span className="text-accent mr-3">✓</span>
                  <span>Hands-on engineering: you build, not just design</span>
                </div>
                <div className="flex items-start">
                  <span className="text-accent mr-3">✓</span>
                  <span>Startup experience or founder mentality</span>
                </div>
                <div className="flex items-start">
                  <span className="text-accent mr-3">✓</span>
                  <span>Comfortable with ambiguity and rapid iteration</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Herakles */}
        <section className="section-padding bg-secondary">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Why Herakles
            </h2>
            <div className="space-y-6 text-lg text-neutral/80">
              <div className="bg-primary p-6 rounded-lg">
                <h3 className="text-accent font-bold mb-2">Impact</h3>
                <p>Your work directly saves lives. This isn't abstract software—it's hardware that matters.</p>
              </div>
              <div className="bg-primary p-6 rounded-lg">
                <h3 className="text-accent font-bold mb-2">Market</h3>
                <p>Counter-UAS market: $6.64B (2025) → $20.31B (2030). Germany alone: $12B investment by 2030.</p>
              </div>
              <div className="bg-primary p-6 rounded-lg">
                <h3 className="text-accent font-bold mb-2">Timing</h3>
                <p>First-mover advantage in anti-FPV infantry defense. No direct competitors in this segment.</p>
              </div>
              <div className="bg-primary p-6 rounded-lg">
                <h3 className="text-accent font-bold mb-2">Ownership</h3>
                <p>Significant equity stake as Co-Founder. Build something from zero to one.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-gradient-to-b from-primary to-secondary text-center">
          <div className="container-custom max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to build the future of defense?
            </h2>
            <p className="text-xl text-neutral/80 mb-8">
              Send your background, GitHub/portfolio, and why you're interested to:
            </p>
            <a
              href="mailto:cto@herakles-defense.com"
              className="btn-primary inline-block text-xl"
            >
              cto@herakles-defense.com
            </a>
            <p className="text-neutral/60 mt-8 text-sm">
              Location: Munich, Germany (relocation support available) | Visa sponsorship possible
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}