const RequestInviteButton = ({ className }: { className?: String }) => {
  return (
    <a
      href='#'
      className={`bg-gradient-to-r from-lime-green to-bright-cyan rounded-full py-3 px-8 font-bold text-white text-xs tracking-wide ${
        className ? className : ''
      }`}
    >
      Request Invite
      <style jsx>{`
        a {
          position: relative;
          overflow: hidden;
        }

        a:hover::after,
        a:focus::after {
          transform: scaleX(1);
          transform-origin: 0 50%;
        }

        a::after {
          position: absolute;
          content: '';
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background: white;
          opacity: 0.28;
          transform: scaleX(0);
          transform-origin: 100% 50%;
          transition: transform 250ms ease-out;
        }
      `}</style>
    </a>
  );
};

export default RequestInviteButton;
