const RequestInviteButton = ({ className }: { className?: String }) => {
  return (
    <a
      href='#'
      className={`bg-gradient-to-r from-lime-green to-bright-cyan rounded-full py-3 px-8 font-bold text-white text-xs tracking-wide ${
        className ? className : ''
      }`}
    >
      Request Invite
    </a>
  );
};

export default RequestInviteButton;
