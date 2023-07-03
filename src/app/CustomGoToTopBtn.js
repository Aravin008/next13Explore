"use client";

const CustomGoToTopBtn = () => {
    return <a role="button" aria-label='top btn' id="top" onClick={(e) => { document.body.scrollTop = 0; document.documentElement.scrollTop = 0; }} className="backtotop" title="Top"></a>;
}

export default CustomGoToTopBtn;