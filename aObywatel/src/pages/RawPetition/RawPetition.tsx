import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HomeHeader from "../../components/HomeHeader";

function RawPetitionPage() {

  const { petitionId } = useParams();
  const [rawContent, setRawContent] = useState(null);
  const [title, setTitle] = useState(null);
  useEffect(() => {
    (async () => {
        const response = await fetch(
            `http://localhost:9125/api/petitions/${petitionId}`
        );
        const data = await response.json();

        setRawContent(data?.content);
        setTitle(data?.title)
    })();
  }, []);

    return (
      <div className="flex justify-center flex-col p-6 text-md">
        <HomeHeader title={title}/>
        {rawContent}
      </div>
    )
}

export default RawPetitionPage;