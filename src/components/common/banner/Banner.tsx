import { Banner as IBanner } from "@/models/banner.model";
import styled from "styled-components";

interface Props {
  banners: IBanner[];
}

function Banner({ banners }: Props) {
  return (
    <BannerStyle>
      <h1>Banner</h1>
    </BannerStyle>
  );
}

const BannerStyle = styled.div``;

export default Banner;
