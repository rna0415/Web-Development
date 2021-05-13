import React from 'react';
import "./modal.css";
const Modal = ( props ) => {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { open, close } = props;

    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <div className={ open ? 'openModal modal' : 'modal' }>
            { open ? (  
                <section>
                    <main>
                        필수정보를 모두 입력해주세요
                    </main>
                    <footer>
                        <button className="close" onClick={close}> 확인 </button>
                    </footer>
                </section>
            ) : null }
        </div>
    )
}
export default Modal;