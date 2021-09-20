<div style={{ textAlign: "left" }}>
<ul style={{ paddingInlineStart: "0" }}>
  {bookDB[selectedGenre].map((book) => (
    <li
      key={book.name}
      style={{
        listStyle: "none",
        padding: "1rem",
        border: "1px solid #D1D5DB",
        width: "70%",
        margin: "1rem 0rem",
        borderRadius: "0.5rem"
      }}
    >
      {" "}
      <div style={{ fontSize: "larger" }}> {book.name} </div>
      <div style={{ fontSize: "smaller" }}> {book.rating} </div>
    </li>
  ))}
</ul>
</div>
</div>
);
}