export default function ContactLoading() {
  return (
    <div className="min-h-screen bg-black-primary pt-24">
      <div className="container-custom section-padding-lg">
        {/* Header Skeleton */}
        <div className="max-w-4xl mx-auto text-center mb-12 space-y-6 animate-pulse">
          <div className="h-12 bg-white-primary/10 rounded-lg w-2/3 mx-auto" />
          <div className="space-y-3">
            <div className="h-4 bg-white-primary/10 rounded w-full" />
            <div className="h-4 bg-white-primary/10 rounded w-5/6 mx-auto" />
          </div>
        </div>

        {/* Contact Grid Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {/* Left Side - Contact Info Cards */}
          <div className="lg:col-span-2 space-y-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="glass-card animate-pulse">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 bg-orange-primary/20 rounded-lg flex-shrink-0" />
                  <div className="flex-1 space-y-3">
                    <div className="h-5 bg-white-primary/10 rounded w-1/2" />
                    <div className="h-4 bg-white-primary/10 rounded w-3/4" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Form Skeleton */}
          <div className="lg:col-span-3">
            <div className="glass-card animate-pulse">
              <div className="space-y-6">
                {/* Form Fields */}
                {[1, 2, 3].map((i) => (
                  <div key={i} className="space-y-2">
                    <div className="h-5 bg-white-primary/10 rounded w-24" />
                    <div className="h-12 bg-white-primary/10 rounded-lg w-full" />
                  </div>
                ))}

                {/* Text Area */}
                <div className="space-y-2">
                  <div className="h-5 bg-white-primary/10 rounded w-24" />
                  <div className="h-32 bg-white-primary/10 rounded-lg w-full" />
                </div>

                {/* Button Skeleton */}
                <div className="h-14 bg-orange-primary/20 rounded-lg w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
