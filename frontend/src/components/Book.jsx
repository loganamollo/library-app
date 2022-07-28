export default function Book({book: {title, author}}) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{author}</p>
    </div>
  )
}
