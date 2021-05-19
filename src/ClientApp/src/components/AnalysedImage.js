import { capitalize } from "../utility";
export const AnalysedImage = ({ selectedImage, selectedModel }) => {
  const fileUrl = selectedImage?.uri
    ? selectedImage.uri
    : selectedImage.dataUri;
  if (!fileUrl) {
    return null;
  }
  const title = `Selected ${selectedModel.slice(0, -1)}`;
  return (
    <div>
      <p className="h4">{title}</p>
      <div className="analyzed-img-container">
        <img
          style={{ maxHeight: "80vh" }}
          className="img-fluid analyzed-img-result"
          src={fileUrl}
          alt="Analysed Document"
        />

        <div align="right" style={{ "margin-top": "15px" }}>
          {/* <p> </p> */}
          <button className="btn btn-primary btn-circle btn-circle-sm m-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="#ffffff"
              className="bi bi-zoom-in"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
              />
              <path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z" />
              <path
                fillRule="evenodd"
                d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
