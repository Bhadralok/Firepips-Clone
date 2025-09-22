import { motion } from "framer-motion";

export default function FlowingWaves() {
  return (
    <div className=" bg-center overflow-hidden">
      <svg
        // width="100%"
        viewBox="0 0 1280 429"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.g
          animate={{ x: [0, -50, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{ scale: 1.1 }}
        >
          <path
            d="M293.562 77.2687C164.293 29.7718 53.3333 139.919 0 77.2686V429H1280V77.2686C1168.44 119.167 1125.33 124.984 1125.33 124.984C1125.33 124.984 1038.67 148.2 910.297 111.508C802.672 80.7444 769.861 77.2687 613.774 124.984C457.687 172.7 455.149 136.64 293.562 77.2687Z"
            fill="#ED3C52"
          />
        </motion.g>

        <motion.g
          animate={{ x: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{ scale: 1.1 }}
        >
          <path
            d="M293.562 162.303C164.293 126.288 53.3333 209.807 0 162.303V429H1280V162.303C1168.44 194.071 1125.33 198.482 1125.33 198.482C1125.33 198.482 1038.67 216.086 910.297 188.264C802.672 164.938 769.861 162.303 613.774 198.482C457.687 234.662 455.149 207.32 293.562 162.303Z"
            fill="#1E0306"
          />
        </motion.g>

        <motion.g
          animate={{ x: [0, -30, 0] }}
          style={{ scale: 1.1 }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <path
            d="M293.562 234.775C164.293 208.547 53.3333 269.37 0 234.775V429H1280V234.775C1168.44 257.911 1125.33 261.123 1125.33 261.123C1125.33 261.123 1038.67 273.943 910.297 253.681C802.672 236.694 769.861 234.775 613.774 261.123C457.687 287.471 455.149 267.559 293.562 234.775Z"
            fill="#FDE9EC"
          />
        </motion.g>
      </svg>
    </div>
  );
}
