const Footer = () => {
	const link = "https://farhad.taraqee.com";
	const target = "_blank";

	return (
		<div className="container">
			Copyright © <small>{new Date().getFullYear()}</small> Farhad Rahmani{" "}
			<a href={link} target={target}>
				farhad.tarqee.com
			</a>
		</div>
	);
};

export default Footer;
