import Avatar, { type IAvatar } from "./Avatar";
import { countAvatars } from "../utils";

interface IAvatarList {
  avatars: IAvatar[];
}

const AvatarList = ({ avatars }: IAvatarList) => {
  return (
    <div className="flex">
      {avatars.map((avatar, i) => (
        <span className="relative" style={{ right: `${i * 0.75}rem` }}>
          {i >= 3 ? (
            <div className="rounded-full size-11 bg-white flex items-center justify-center">
              <p className="text-black font-semibold">
                +{countAvatars(avatars.length, 3)}
              </p>
            </div>
          ) : (
            <Avatar imgSrc={avatar.imgSrc} key={avatar.imgSrc} />
          )}
        </span>
      ))}
    </div>
  );
};

export default AvatarList;
