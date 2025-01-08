import useUi from "../../hooks/useUi"

const OvalBackgroundElement = () => {
  const { screenSize } = useUi()

  return (
    <div className="flex items-center h-full">
      {screenSize === 'mobile' ? <>
        <OvalItem />
        <OvalItem />
        <OvalItem />
      </> : <>
        <OvalItem />
        <OvalItem />
        <OvalItem />
        <OvalItem />
        <OvalItem />
        <OvalItem />
        <OvalItem />
        <OvalItem />
        <OvalItem />
      </>
      }
    </div>
  )
}

export default OvalBackgroundElement

const OvalItem = () => {
  return (
    <div className="bg-primary w-full h-[24rem] rounded-[3.5rem] md:h-[28rem]" />
  )
}