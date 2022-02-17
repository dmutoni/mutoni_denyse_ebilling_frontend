export default function Button(props) {
  return (
    <button
      className={`my-5 w-full p-3 rounded text-white bg-blue-500
            ${props.loading && "opacity-60"} hover:opacity-60
            
            `}
    >
      {props.loading ? props.loadingTitle : props.title}
    </button>
  );
}
