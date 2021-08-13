import "./write.css";

export default function Write() {
  return (
    <div className="write">
      <div className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="fas fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writInput"
            autoFocus
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="tell your story..."
            type="text"
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </div>
    </div>
  );
}
