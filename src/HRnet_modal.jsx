import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import styles from "./hrnet_modal.module.scss";
/**
 * Reusable modal component used to display confirmations,
 * alerts, forms, or any custom content.
 *
 * The modal supports:
 * - conditional rendering through `isOpen`
 * - closing with the Escape key
 * - closing when clicking on the overlay
 * - background scroll locking while open
 * - automatic focus management on open
 * - optional close button
 * - optional cancel and confirm buttons
 * - custom icons inside buttons
 * - custom body content through `children`
 * - mobile bottom-sheet mode with drag handle
 * - swipe / drag to close on supported devices
 * - visual customization through props and CSS classes
 *
 * @component
 *
 * @param {Object} props - Component properties.
 *
 * @param {boolean} props.isOpen
 * Controls modal visibility.
 * When `false`, the component returns `null`.
 *
 * @param {Function} props.onClose
 * Callback triggered to close the modal.
 * Fired when clicking the overlay, pressing Escape,
 * clicking the close button, or after certain actions.
 *
 * @param {Function} [props.onCancel]
 * Optional callback executed before closing
 * when the cancel button is clicked.
 *
 * @param {Function} [props.onConfirm]
 * Optional callback executed before closing
 * when the confirm button is clicked.
 * Called only when `confirmButtonType` is `"button"`.
 *
 * @param {string} [props.title="Modal title"]
 * Main heading displayed in the modal.
 *
 * @param {string} [props.message=""]
 * Optional text displayed below the title.
 * If provided, it is linked through `aria-describedby`.
 *
 * @param {React.ReactNode} [props.children]
 * Custom content rendered inside the modal body.
 *
 * @param {string} [props.overlayClassName=""]
 * Additional CSS class applied to the overlay.
 *
 * @param {"fixed"|"absolute"} [props.overlayPosition="fixed"]
 * CSS position used for the overlay container.
 *
 * @param {"modal"|"bottom-sheet"} [props.mobileMode="bottom-sheet"]
 * Mobile display mode.
 * `"bottom-sheet"` renders the modal as a sliding panel from the bottom.
 *
 * @param {string} [props.className=""]
 * Additional CSS class applied to the modal container.
 *
 * @param {string} [props.bodyClassName=""]
 * Additional CSS class applied to the modal body.
 *
 * @param {string|number} [props.width="520px"]
 * Modal width.
 * Numeric values are converted to pixels.
 *
 * @param {string|number} [props.maxHeight="85vh"]
 * Maximum modal height.
 * Numeric values are converted to pixels.
 *
 * @param {string|number} [props.borderRadius="20px"]
 * Border radius applied to the modal container.
 *
 * @param {string|number} [props.fontSize="1rem"]
 * Base font size applied to the modal.
 *
 * @param {string} [props.backgroundColor="#ffffff"]
 * Background color of the modal container.
 *
 * @param {string} [props.textColor="#111827"]
 * Main text color and close button color.
 *
 * @param {string} [props.titleColor="#111827"]
 * Color applied to the title heading.
 *
 * @param {string} [props.overlayColor="rgba(0, 0, 0, 0.25)"]
 * Background color of the overlay.
 *
 * @param {string} [props.boxShadow="0 12px 40px rgba(0, 0, 0, 0.2)"]
 * Box shadow applied to the modal container.
 *
 * @param {string} [props.fontFamily="inherit"]
 * Font family used inside the modal.
 *
 * @param {boolean} [props.showCloseIcon=false]
 * Displays the close button when `true`.
 *
 * @param {string} [props.closeButtonClassName=""]
 * Additional CSS class applied to the close button.
 *
 * @param {React.ReactNode} [props.closeIcon=null]
 * Custom icon rendered inside the close button.
 * Defaults to `×`.
 *
 * @param {boolean} [props.showCancelButton=false]
 * Displays the cancel button when `true`.
 *
 * @param {React.ReactNode} [props.cancelIcon=null]
 * Optional icon displayed before cancel text.
 *
 * @param {string} [props.cancelText="Cancel"]
 * Text displayed inside the cancel button.
 *
 * @param {string} [props.cancelButtonColor="#e5e7eb"]
 * Background color of the cancel button.
 *
 * @param {string} [props.cancelButtonTextColor="#111827"]
 * Text color of the cancel button.
 *
 * @param {string} [props.cancelButtonClassName=""]
 * Additional CSS class applied to the cancel button.
 *
 * @param {boolean} [props.showConfirmButton=false]
 * Displays the confirm button when `true`.
 *
 * @param {React.ReactNode} [props.confirmIcon=null]
 * Optional icon displayed before confirm text.
 *
 * @param {string} [props.confirmText="Confirm"]
 * Text displayed inside the confirm button.
 *
 * @param {"button"|"submit"|"reset"} [props.confirmButtonType="button"]
 * Native HTML button type.
 *
 * If set to `"submit"`, form submission
 * should be handled externally.
 *
 * @param {string} [props.confirmButtonColor="#2563eb"]
 * Background color of the confirm button.
 *
 * @param {string} [props.confirmButtonTextColor="#ffffff"]
 * Text color of the confirm button.
 *
 * @param {string} [props.confirmButtonClassName=""]
 * Additional CSS class applied to the confirm button.
 *
 * @param {boolean} [props.showDragHandle=true]
 * Displays a decorative drag handle in `"bottom-sheet"` mode.
 * Can also be used for swipe-down closing interaction.
 *
 * @returns {JSX.Element|null}
 * The modal element when open, otherwise `null`.
 */

function HRnet_modal({
  isOpen,

  overlayColor = "rgba(0, 0, 0, 0.25)",
  overlayClassName = "",
  overlayPosition = "fixed",
  mobileMode = "bottom-sheet",
  className = "",
  width = "520px",
  maxHeight = "85vh",
  borderRadius = "20px",
  fontSize = "1rem",
  backgroundColor = "#ffffff",

  boxShadow = "0 12px 40px rgba(0, 0, 0, 0.2)",
  fontFamily = "inherit",
  bodyClassName = "",

  title = "Modal title",
  titleColor = "#111827",
  message = "",
  textColor = "#111827",
  children,

  onCancel,
  onConfirm,
  onClose,

  showCloseIcon = false,
  closeButtonClassName = "",
  closeIcon = null,

  showCancelButton = false,
  cancelIcon = null,
  cancelText = "Cancel",
  cancelButtonColor = "#e5e7eb",
  cancelButtonTextColor = "#111827",
  cancelButtonClassName = "",

  showConfirmButton = false,
  confirmIcon = null,
  confirmText = "Confirm",
  confirmButtonColor = "#2563eb",
  confirmButtonTextColor = "#ffffff",
  confirmButtonClassName = "",

  showDragHandle = true,

  confirmButtonType = "button",
}) {
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);
  const cancelButtonRef = useRef(null);
  const confirmButtonRef = useRef(null);
  const startY = useRef(0);
  const dragValue = useRef(0);

  const [dragY, setDragY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  /**
   * Handles side effects when modal opens:
   * - locks page scroll
   * - closes modal with Escape key
   * - restores scroll on unmount
   */
  useEffect(() => {
    if (!isOpen) return;

    // Save previous body overflow value
    const previousOverflow = document.body.style.overflow;

    // Focus automatique sur la modale
    requestAnimationFrame(() => {
      closeButtonRef.current?.focus() ||
        cancelButtonRef.current?.focus() ||
        confirmButtonRef.current?.focus() ||
        modalRef.current?.focus();
    });
    /**
     * Close modal when Escape key is pressed
     */
    function handleEscape(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    // Add keyboard listener
    document.addEventListener("keydown", handleEscape);

    // Prevent background scroll
    document.body.style.overflow = "hidden";

    // Cleanup when modal closes
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, onClose]);

  /**
   * If modal is closed, render nothing.
   */
  if (!isOpen) return null;

  /**
   * Close modal only when clicking on overlay,
   * not inside modal content.
   */
  function handleOverlayClick(event) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  /**
   * Handles cancel action:
   * - execute optional callback
   * - close modal
   */
  function handleCancel() {
    onCancel?.();
    onClose();
  }

  /**
   * Handles confirm action.
   *
   * If button type = submit,
   * form submission is handled externally.
   */
  function handleConfirm() {
    if (confirmButtonType === "button") {
      onConfirm?.();
      onClose();
    }
  }

  function handlePointerStart(event) {
    startY.current = event.clientY;
    dragValue.current = 0;
    setIsDragging(true);

    event.currentTarget.setPointerCapture?.(event.pointerId);
  }

  function handlePointerMove(event) {
    if (!isDragging) return;

    const diff = event.clientY - startY.current;

    if (diff > 0) {
      dragValue.current = diff;
      setDragY(diff);
    }
  }

  function closeWithAnimation() {
    setIsClosing(true);
    setDragY(window.innerHeight);

    setTimeout(() => {
      setIsClosing(false);
      setDragY(0);
      onClose();
    }, 320);
  }

  function handlePointerEnd(event) {
    setIsDragging(false);

    event.currentTarget.releasePointerCapture?.(event.pointerId);

    if (dragValue.current > 90) {
      closeWithAnimation();
      return;
    }

    setDragY(0);
  }

  return (
    /**
     * Overlay background
     */
    <div
      className={`${styles.modal__overlay} ${overlayClassName}`}
      style={{ backgroundColor: overlayColor, position: overlayPosition }}
      onClick={handleOverlayClick}
    >
      {/* Main modal container */}
      <div
        className={`
          ${styles.modal__container} 
          ${mobileMode === "bottom-sheet" ? styles.modal__container_sheet : ""} 
          ${className}`}
        style={{
          "--modal-width": typeof width === "number" ? `${width}px` : width,
          "--modal-max-height":
            typeof maxHeight === "number" ? `${maxHeight}px` : maxHeight,
          fontSize,
          backgroundColor,
          color: textColor,
          borderRadius,
          boxShadow,
          fontFamily,
          transform: `translateY(${dragY}px)`,
          transition: isDragging
            ? "none"
            : "transform 0.32s cubic-bezier(0.32, 0.72, 0, 1)",
        }}
        ref={modalRef}
        role="dialog"
        tabIndex={-1}
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby={message ? "modal-message" : undefined}
      >
        {/* Decorative drag handle */}
        {showDragHandle && mobileMode === "bottom-sheet" && (
          <span
            className={styles.modal__dragHandle}
            aria-hidden="true"
            onPointerDown={handlePointerStart}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerEnd}
            onPointerCancel={handlePointerEnd}
          />
        )}
        {/* Optional close button */}
        {showCloseIcon && (
          <button
            ref={closeButtonRef}
            type="button"
            className={`${styles.modal__close} ${closeButtonClassName}`}
            onClick={onClose}
            aria-label="Close modal"
            style={{ color: textColor }}
          >
            {closeIcon || "×"}
          </button>
        )}

        {/* Modal content */}
        <div className={styles.modal__content}>
          {/* Title */}
          <h2
            id="modal-title"
            className={styles.modal__title}
            style={{ color: titleColor }}
          >
            {title}
          </h2>

          {/* Optional message */}
          {message && (
            <p id="modal-message" className={styles.modal__message}>
              {message}
            </p>
          )}

          {/* Custom body */}
          {children && (
            <div className={`${styles.modal__body} ${bodyClassName}`}>
              {children}
            </div>
          )}

          {/* Action buttons */}
          {(showCancelButton || showConfirmButton) && (
            <div className={styles.modal__actions}>
              {/* Cancel button */}
              {showCancelButton && (
                <button
                  ref={cancelButtonRef}
                  type="button"
                  className={`${styles.modal__button} ${styles.modal__button_cancel} ${cancelButtonClassName}`}
                  onClick={handleCancel}
                  style={{
                    backgroundColor: cancelButtonColor,
                    color: cancelButtonTextColor,
                  }}
                >
                  {cancelIcon && (
                    <span className={styles.modal__buttonIcon}>
                      {cancelIcon}
                    </span>
                  )}
                  {cancelText}
                </button>
              )}

              {/* Confirm button */}
              {showConfirmButton && (
                <button
                  ref={confirmButtonRef}
                  type={confirmButtonType}
                  className={`${styles.modal__button} ${styles.modal__button_confirm} ${confirmButtonClassName}`}
                  onClick={handleConfirm}
                  style={{
                    backgroundColor: confirmButtonColor,
                    color: confirmButtonTextColor,
                  }}
                >
                  {confirmIcon && (
                    <span className={styles.modal__buttonIcon}>
                      {confirmIcon}
                    </span>
                  )}
                  {confirmText}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * Runtime validation of props.
 */
HRnet_modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  overlayPosition: PropTypes.oneOf(["fixed", "absolute"]),
  mobileMode: PropTypes.oneOf(["modal", "bottom-sheet"]),

  title: PropTypes.string,
  message: PropTypes.string,
  children: PropTypes.node,

  onClose: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func,

  showCloseIcon: PropTypes.bool,
  showCancelButton: PropTypes.bool,
  showConfirmButton: PropTypes.bool,
  showDragHandle: PropTypes.bool,

  closeIcon: PropTypes.node,
  cancelIcon: PropTypes.node,
  confirmIcon: PropTypes.node,

  cancelText: PropTypes.string,
  confirmText: PropTypes.string,

  confirmButtonType: PropTypes.oneOf(["button", "submit", "reset"]),

  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  titleColor: PropTypes.string,
  overlayColor: PropTypes.string,

  confirmButtonColor: PropTypes.string,
  cancelButtonColor: PropTypes.string,

  confirmButtonTextColor: PropTypes.string,
  cancelButtonTextColor: PropTypes.string,

  boxShadow: PropTypes.string,
  fontFamily: PropTypes.string,

  className: PropTypes.string,
  overlayClassName: PropTypes.string,
  bodyClassName: PropTypes.string,
  closeButtonClassName: PropTypes.string,
  confirmButtonClassName: PropTypes.string,
  cancelButtonClassName: PropTypes.string,
};

export default HRnet_modal;
