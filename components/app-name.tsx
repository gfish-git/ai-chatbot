interface AppNameProps {
  size?: 'default' | 'small';
}

export function AppName({ size = 'default' }: AppNameProps) {
  return (
    <span
      style={{
        fontFamily: "Poppins, sans-serif",
        fontSize: size === 'small' ? "22px" : "26px",
        fontWeight: 600,
        background: "linear-gradient(90deg, #4BA8E4 0%, #226088 70%, #4B4B4B 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        marginLeft: "0px",
        cursor: "pointer",
        textDecoration: "none",
        display: "block",
        whiteSpace: "nowrap",
      }}
    >
      ProdLens
    </span>
  );
}

export default AppName; 