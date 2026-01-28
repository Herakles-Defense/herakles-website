export default function Loading() {
  return (
    <div className="min-h-screen bg-black-primary pt-24">
      <div className="container-custom">
        {/* Hero Skeleton */}
        <div className="section-padding-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-pulse">
              {/* Title Skeleton */}
              <div className="h-12 bg-white-primary/10 rounded-lg w-3/4" />
              <div className="h-12 bg-white-primary/10 rounded-lg w-full" />

              {/* Subtitle Skeleton */}
              <div className="space-y-3">
                <div className="h-4 bg-white-primary/10 rounded w-full" />
                <div className="h-4 bg-white-primary/10 rounded w-5/6" />
                <div className="h-4 bg-white-primary/10 rounded w-4/6" />
              </div>

              {/* Button Skeletons */}
              <div className="flex gap-4">
                <div className="h-14 bg-orange-primary/20 rounded-lg w-40" />
                <div className="h-14 bg-white-primary/10 rounded-lg w-40" />
              </div>
            </div>

            {/* Image Skeleton */}
            <div className="relative aspect-video bg-white-primary/10 rounded-xl animate-pulse" />
          </div>
        </div>

        {/* Cards Grid Skeleton */}
        <div className="section-padding">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="glass-card animate-pulse">
                <div className="h-12 w-12 bg-orange-primary/20 rounded-lg mb-4" />
                <div className="h-6 bg-white-primary/10 rounded w-3/4 mb-3" />
                <div className="space-y-2">
                  <div className="h-4 bg-white-primary/10 rounded w-full" />
                  <div className="h-4 bg-white-primary/10 rounded w-5/6" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
