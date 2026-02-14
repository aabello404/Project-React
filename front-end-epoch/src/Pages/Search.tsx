import { useNavigate, useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import type { dtoResult } from "../Services/Interface/Interface.Service";
import SvgLoading from "../Components/SvgLoading/SvgLoading";
import NotFound from "../Components/pageNotFound/notFound";
import SearchResult from "../Components/Search/SearchResult";

export default function Search() {
  const Search = useParams();
  const [searchQuery, setQuery] = useState("");
  const [SearchResultObj, setResult] = useState<
    dtoResult[] | undefined | null
  >();
  const navigate = useNavigate();

  useEffect(() => {
    const controller = new AbortController();
    const accessToken = sessionStorage.getItem("UserEpoch");
    if (!accessToken) navigate("/auth");
    Search.query && setQuery(Search.query);
    if (!searchQuery) return;
    const fetchSearch = async () => {
      try {
        const response = await fetch(
          `http://localhost:9000/user/search?query=${searchQuery}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },

            signal: controller.signal,
          },
        );
        const data = await response.json();
        if (response.ok) {
          //  console.log(data);
          setResult(data);
        } else {
          if (response.status === 404) {
            console.log(
              "this Awkward nothing is showing up with that combination",
            );
          }
          setResult(null);
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchSearch();
    console.log("hello", searchQuery);
    return () => controller.abort();
  }, [Search.query, searchQuery]);
  if (SearchResultObj === undefined) return <SvgLoading />;
  else if (SearchResultObj === null) return <NotFound />;
  return <SearchResult data={SearchResultObj} />;
}
