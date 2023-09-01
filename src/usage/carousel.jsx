import { Carousel } from 'actify'

export default () => {
  return (
    <>
      <Carousel current={0} interval={2000} autoPlay control indicator infinite>
        <img
          src="https://images.unsplash.com/photo-1692812298405-db9c1ca093ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1692902295604-6c5109aa55a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div>
          <img
            src="https://images.unsplash.com/photo-1692589250460-1ea229c9942a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="image 3"
            className="h-full w-full object-cover"
          />
          <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl bg-surface/90 p-2 rounded-xl">
            Custom Text
          </p>
        </div>
      </Carousel>
    </>
  )
}
