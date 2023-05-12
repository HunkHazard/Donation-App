const VideoPlayer = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};

export default VideoPlayer;