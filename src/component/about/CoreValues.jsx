import React from "react";
import {ShieldCheck, Sparkles} from "lucide-react";

const CoreValues = () => {
  return (
    <section className="py-6 md:py-10 xl:py-14 relative overflow-hidden  bg-white dark:bg-slate-950 transition-colors duration-500">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950" />
        <div className="max-w-7xl mx-auto px-7 lg:px-12 xl:px-14 relative">

          <div  className="max-w-3xl mx-auto text-center">

            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 dark:border-blue-800 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl px-5 py-2">
              <Sparkles size={16} className="text-blue-600"/>
              <span className="font-medium text-blue-600 dark:text-blue-400">Our Core Values</span>
            </span>
            <p className="mt-4 text-font/60 dark:text-dark-muted/60">
              Our values define how we innovate, collaborate,and build trusted relationships with businesses around the world.
            </p>

          </div>

          <div className="mt-12 grid lg:grid-cols-12 gap-8">

            {/* Featured Card */}

            <div className="lg:col-span-7 group relative overflow-hidden rounded-[34px] border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl p-10 shadow-xl transition-all duration-500">

              {/* Glow */}

              <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-blue-500/10 blur-[100px] group-hover:bg-blue-500/20 transition-all duration-700"/>

              {/* Gradient Border */}

              <div className="absolute inset-0 rounded-[34px] p-[1px] bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-violet-500/0 opacity-0 group-hover:opacity-100 transition duration-700">

                <div className="h-full w-full rounded-[34px] bg-white/80 dark:bg-slate-900/80"/>

              </div>

              <div className="relative">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg">
                  <ShieldCheck className="text-white" size={30}/>
                </div>

                <h3 className="mt-8 text-4xl font-bold text-slate-900 dark:text-white">
                  Accountability
                </h3>

                <p className="mt-6 leading-9 text-slate-600 dark:text-slate-400">
                  We believe accountability builds trust.Every commitment we make is backed by
                  responsibility, transparency, and measurable execution.
                </p>

                <div className="mt-10 flex flex-wrap gap-3">

                  {["Ownership","Transparency","Responsibility","Execution"].map((item)=>(
                    <span
                      key={item}
                      className="rounded-full border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 px-4 py-2 text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 grid gap-6">


              <div className="group relative overflow-hidden rounded-[30px] border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl p-7 shadow-lg hover:shadow-xl transition-all duration-500">

                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition duration-500" />

                <div className="relative">

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg">

                    <ShieldCheck size={20} className="text-white" />

                  </div>

                  <h3 className="mt-4 text-2xl font-bold text-slate-900 dark:text-white">Integrity</h3>
                  <p className="leading-7 text-slate-600 dark:text-slate-400">

                    We communicate honestly, build transparent relationships,
                    and uphold ethical standards in every decision.

                  </p>

                </div>

              </div>



              <div className="grid sm:grid-cols-2 gap-6">

                {/* Customer First */}

                <div className="group rounded-[28px] border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl p-6 transition duration-500 hover:shadow-xl">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-100 dark:bg-pink-500/10">❤️</div>

                  <h4 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">Customer First</h4>

                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Every feature begins with solving real customer challenges.
                  </p>

                </div>

                {/* Innovation */}

                <div
                  className="group rounded-[28px] border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl p-6 transition duration-500 hover:shadow-xl">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 dark:bg-violet-500/10">💡</div>

                  <h4 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
                    Innovation
                  </h4>

                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    We constantly push technology forward to deliver smarter AI.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

    </section>
  )
}

export default CoreValues