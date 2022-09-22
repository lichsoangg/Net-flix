import React from "react";
import MovieRow from "./MovieRow";
const movies = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrHHovwjYeJzbBnQL6Fneh0SdaZppoiCQLpA&usqp=CAU",
  "https://genk.mediacdn.vn/2018/12/27/photo-1-15458898386971044005541.jpg",
  ,
  "https://genk.mediacdn.vn/2018/12/27/photo-1-1545889841484247241756.jpg",
  "https://bizweb.dktcdn.net/100/332/012/files/anh2-2de1b82d-913e-46fa-b233-c987d92430e2.png?v=1565536776597",
  "https://bizweb.dktcdn.net/100/332/012/files/anh3-e17aaaca-4800-4672-8e82-15c0b5d08881.png?v=1565536826615",
  "https://genk.mediacdn.vn/2018/12/27/photo-3-1545889841487631724582.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrHHovwjYeJzbBnQL6Fneh0SdaZppoiCQLpA&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXpVdKGZQQZKGHjQiQM_X4y0dwkH4fIHeCKg&usqp=CAU",
  "https://bizweb.dktcdn.net/100/332/012/files/poster-phim-co-hinh-anh-nam-than.jpg?v=1580462359314",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgU1PULkVO7OcB4tLhyhMfUT52IXOGYDVNDw&usqp=CAU",
  "https://bizweb.dktcdn.net/100/332/012/files/poster-phim-harry-potter.jpg?v=1580793811703",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgU1PULkVO7OcB4tLhyhMfUT52IXOGYDVNDw&usqp=CAU",
  "https://bizweb.dktcdn.net/100/332/012/files/poster-phim-co-hinh-anh-nam-than.jpg?v=1580462359314",
  "https://bizweb.dktcdn.net/100/332/012/files/poster-phim-co-trang-dien-hy-cong-luoc.jpg?v=1580462173770",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFkXhiHGa95kTELvTmLNt6837bkHfz1HHmPw&usqp=CAU",
  "https://bizweb.dktcdn.net/100/332/012/files/poster-phim-truyen-hinh-doi-lap-tuong-phan.jpg?v=1580461882825",
  "https://bizweb.dktcdn.net/thumb/1024x1024/100/332/012/articles/untitledanh-2-5.png?v=1565404066103",
  "https://bizweb.dktcdn.net/100/332/012/files/untitled-181634a7-5cb3-433f-87b7-8ec9d3875005.png?v=1565536712570",
];

function Contents(props) {
  return (
    <div>
      <MovieRow movies={movies} title="Netflix Original" isNetflix={true} />
      <MovieRow movies={movies} title="Trending movies" isNetflix={false} />
      <MovieRow movies={movies} title="Top list movies" />
      <MovieRow movies={movies} title="Actions Movies" />
      <MovieRow />
    </div>
  );
}

export default Contents;
