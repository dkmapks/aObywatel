import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RawPetitionPage() {
    
  const { petitionId } = useParams();
  const [rawContent, setRawContent] = useState(null);
  useEffect(() => {
    (async () => {
        const response = await fetch(
            `http://localhost:9125/api/petitions/${petitionId}`
        );
        const data = await response.json();
        console.log('data: ', data)

        setRawContent(data?.content);
    })();
  }, []);

    return <div>
        {rawContent}
    </div>;
}

export default RawPetitionPage;