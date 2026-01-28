export default function MissionLoading() {
  return (
    <div className="min-h-screen bg-black-primary pt-24">
      <div className="container-custom">
        {/* Hero Skeleton */}
        <div className="section-padding-lg">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-pulse">
            <div className="h-10 bg-orange-primary/20 rounded-lg w-48 mx-auto" />
            <div className="h-12 bg-white-primary/10 rounded-lg w-3/4 mx-auto" />
            <div className="h-12 bg-white-primary/10 rounded-lg w-full" />
            <div className="space-y-3 mt-6">
              <div className="h-4 bg-white-primary/10 rounded w-full" />
              <div className="h-4 bg-white-primary/10 rounded w-5/6 mx-auto" />
            </div>
          </div>
        </div>

        {/* Timeline Skeleton */}
        <div className="section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="relative flex gap-6 md:gap-8 animate-pulse">
                  {/* Timeline Node */}
                  <div className="relative flex flex-col items-center">
                    <div className="h-12 w-12 md:h-14 md:w-14 rounded-full bg-orange-primary/20" />
                    {i !== 3 && (
                      <div className="absolute top-12 md:top-14 left-1/2 -translate-x-1/2 w-0.5 h-32 bg-orange-primary/10" />
                    )}
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 pb-8">
                    <div className="glass-card">
                      <div className="h-6 bg-white-primary/10 rounded w-3/4 mb-4" />
                      <div className="space-y-2">
                        <div className="h-4 bg-white-primary/10 rounded w-full" />
                        <div className="h-4 bg-white-primary/10 rounded w-5/6" />
                        <div className="h-4 bg-white-primary/10 rounded w-4/6" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vision Section Skeleton */}
        <div className="section-padding-lg">
          <div className="max-w-4xl mx-auto space-y-8 animate-pulse">
            <div className="h-10 bg-white-primary/10 rounded-lg w-2/3 mx-auto" />
            <div className="space-y-3">
              <div className="h-4 bg-white-primary/10 rounded w-full" />
              <div className="h-4 bg-white-primary/10 rounded w-5/6 mx-auto" />
              <div className="h-4 bg-white-primary/10 rounded w-4/6 mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
