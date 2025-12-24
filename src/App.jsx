import React from "react";
import {
  BarChart3,
  TrendingUp,
  FileText,
  Zap,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased">
      <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <BarChart3 className="h-7 w-7 text-blue-600" />
                <span className="text-xl cursor-pointer font-semibold text-gray-900">
                  GrowthLens AI
                </span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#product"
                className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
              >
                Product
              </a>
              <a
                href="#features"
                className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
              >
                Pricing
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
              >
                Contact
              </a>
              <button className="bg-blue-600 cursor-pointer text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-20 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Turn Your Data Into Actionable Business Insights
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed">
              GrowthLens AI analyzes your business data with artificial
              intelligence to uncover trends, predict outcomes, and help you
              make confident decisions that drive growth.
            </p>
            <button className="bg-blue-600 cursor-pointer text-white px-8 py-4 rounded-md text-base font-medium hover:bg-blue-700 transition-colors inline-flex items-center">
              Request a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-sm font-medium text-gray-500 mb-8 uppercase tracking-wide">
            Trusted by Growing Businesses
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <div className="text-gray-400 font-semibold text-xl">
              TechVenture
            </div>
            <div className="text-gray-400 font-semibold text-xl">DataFlow</div>
            <div className="text-gray-400 font-semibold text-xl">
              CloudScale
            </div>
            <div className="text-gray-400 font-semibold text-xl">
              Innovate Co
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Grow Smarter
            </h2>
            <p className="text-lg text-gray-600">
              Powerful features designed to transform how you understand and act
              on your business data.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 border border-gray-200 rounded-lg bg-white">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                AI Analytics
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Advanced algorithms analyze your data patterns to surface
                insights you might have missed.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg bg-white">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Predictive Forecasting
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Anticipate future trends and outcomes with machine learning
                models trained on your business data.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg bg-white">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Automated Reports
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Generate comprehensive reports automatically and share insights
                with your team effortlessly.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg bg-white">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Business Optimization
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Identify bottlenecks and opportunities to streamline operations
                and improve efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600">
              Get started in minutes and see results in days
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Connect Your Data
              </h3>
              <p className="text-gray-600">
                Securely integrate your existing tools and data sources with
                just a few clicks.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                AI Analyzes
              </h3>
              <p className="text-gray-600">
                Our platform processes your data using advanced AI to identify
                patterns and opportunities.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Take Action
              </h3>
              <p className="text-gray-600">
                Receive clear recommendations and insights you can act on
                immediately to grow your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose GrowthLens AI
            </h2>
            <p className="text-lg text-gray-600">
              Built for businesses that want to make data-driven decisions
              without the complexity
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-blue-600 shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Easy to Use
                </h3>
                <p className="text-gray-600">
                  No data science degree required. Our intuitive interface makes
                  complex analytics accessible to everyone.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-blue-600 shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Real-Time Insights
                </h3>
                <p className="text-gray-600">
                  Monitor your business metrics as they happen and respond
                  quickly to changing conditions.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-blue-600 shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Secure & Compliant
                </h3>
                <p className="text-gray-600">
                  Enterprise-grade security with SOC 2 compliance ensures your
                  data is always protected.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-blue-600 shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Scalable Solution
                </h3>
                <p className="text-gray-600">
                  Grows with your business from startup to enterprise without
                  missing a beat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Simple Pricing</h2>
          <p className="text-gray-600 mb-12">
            Choose a plan that fits your business needs.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl border border-gray-200 bg-white hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Starter</h3>
              <p className="text-4xl font-bold mb-6">$29</p>

              <ul className="text-gray-600 space-y-3 mb-8 text-sm">
                <li>✔ Basic analytics dashboard</li>
                <li>✔ Monthly reports</li>
                <li>✔ Email support</li>
              </ul>

              <button className="w-full cursor-pointer border border-blue-600 text-blue-600 py-3 rounded-md font-medium hover:bg-blue-50 transition">
                Get Started
              </button>
            </div>

            <div className="p-8 rounded-xl border-2 border-blue-600 bg-white shadow-lg scale-[1.02]">
              <span className="inline-block mb-3 text-xs font-semibold text-blue-600 uppercase tracking-wide">
                Most Popular
              </span>
              <h3 className="text-xl font-semibold mb-2">Pro</h3>
              <p className="text-4xl font-bold mb-6">$99</p>

              <ul className="text-gray-600 space-y-3 mb-8 text-sm">
                <li>✔ Advanced AI analytics</li>
                <li>✔ Predictive forecasting</li>
                <li>✔ Automated reports</li>
                <li>✔ Priority support</li>
              </ul>

              <button className="w-full cursor-pointer bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition">
                Start Free Trial
              </button>
            </div>

            <div className="p-8 rounded-xl border border-gray-200 bg-white hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
              <p className="text-4xl font-bold mb-6">Custom</p>

              <ul className="text-gray-600 space-y-3 mb-8 text-sm">
                <li>✔ Custom integrations</li>
                <li>✔ Dedicated account manager</li>
                <li>✔ Enterprise security</li>
              </ul>

              <button className="w-full cursor-pointer border border-gray-900 text-gray-900 py-3 rounded-md font-medium hover:bg-gray-100 transition">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Join hundreds of businesses already making smarter decisions with
            GrowthLens AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white cursor-pointer text-blue-600 px-8 py-4 rounded-md text-base font-medium hover:bg-gray-100 transition-colors">
              Start Free Trial
            </button>
            <button className="bg-transparent cursor-pointer border-2 border-white text-white px-8 py-4 rounded-md text-base font-medium hover:bg-blue-700 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <BarChart3 className="h-6 w-6 text-blue-500" />
                <span className="text-lg font-semibold text-white">
                  GrowthLens AI
                </span>
              </div>
              <p className="text-sm text-gray-400">
                Empowering businesses with AI-driven insights and analytics.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Security
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 sm:mb-0">
              © 2025 GrowthLens AI. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="www.linkedin.com/kartikeyagupta05"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
