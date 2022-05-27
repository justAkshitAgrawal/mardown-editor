import { useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import ReactMarkdown from "react-markdown";

function App() {
  const [markdownText, setMarkdownText] = useState("Welcome");
  return (
    <div className="h-screen text-white bg-gray-900">
      <div className="flex justify-center p-10 font-mono text-2xl capitalize">
        <header>Welcome to Markdown Editor</header>
      </div>
      <div className="flex items-center justify-around p-10">
        <div className="flex flex-col items-center space-y-2">
          <h1 className="text-xl">Enter Text</h1>
          <textarea
            name="Markdown"
            cols="50"
            rows="20"
            onChange={(e) => setMarkdownText(e.target.value)}
            value={markdownText}
            className="p-5 text-lg text-black bg-white rounded-lg"
          ></textarea>
        </div>
        <div>
          <BiRightArrowAlt className="w-10 h-10" />
        </div>
        <div className="flex flex-col items-center space-y-2">
          <h1 className="text-xl">Markdown</h1>
          <ReactMarkdown className=" text-black p-4 text-lg  min-h-[60vh] w-[50vh] bg-white rounded-lg max-w-[50vh]">
            {markdownText}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default App;
