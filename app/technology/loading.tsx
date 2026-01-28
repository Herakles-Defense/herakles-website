export default function TechnologyLoading() {
  return (
    <div className="min-h-screen bg-black-primary pt-24">
      <div className="container-custom">
        {/* Hero Skeleton */}
        <div className="section-padding-lg">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-pulse">
            <div className="h-12 bg-white-primary/10 rounded-lg w-3/4 mx-auto" />
            <div className="h-12 bg-white-primary/10 rounded-lg w-full" />
            <div className="h-4 bg-white-primary/10 rounded w-2/3 mx-auto mt-6" />
          </div>
        </div>

        {/* Technical Specs Grid Skeleton */}
        <div className="section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="glass-card animate-pulse">
                <div className="h-8 w-8 bg-orange-primary/20 rounded-lg mb-4" />
                <div className="h-8 bg-white-primary/10 rounded w-3/4 mb-2" />
                <div className="h-4 bg-white-primary/10 rounded w-1/2" />
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid Skeleton */}
        <div className="section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="glass-card animate-pulse">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-orange-primary/20 rounded-lg flex-shrink-0" />
                  <div className="flex-1 space-y-3">
                    <div className="h-6 bg-white-primary/10 rounded w-3/4" />
                    <div className="space-y-2">
                      <div className="h-4 bg-white-primary/10 rounded w-full" />
                      <div className="h-4 bg-white-primary/10 rounded w-5/6" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Skeleton */}
        <div className="section-padding">
          <div className="relative aspect-video bg-white-primary/10 rounded-xl animate-pulse max-w-5xl mx-auto" />
        </div>
      </div>
    </div>
  );
}
