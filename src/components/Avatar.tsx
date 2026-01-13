export interface IAvatar {
  imgSrc: string;
}

const Avatar = ({ imgSrc }: IAvatar) => {
  return (
    <div className="size-11 rounded-full overflow-hidden">
      <img src={imgSrc} alt={imgSrc} />
    </div>
  );
};

export default Avatar;
