export default function MainHeading(props:any) {
  const tw = props.tw
  return (
    <>
      <h1 className={`mb-4 text-4xl font-extrabold ${tw}`}>{props.children}</h1>
    </>
  )
}