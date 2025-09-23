"use client";

import { motion, AnimatePresence, rgba } from "framer-motion";

interface ModalRoutineProps {
  open: boolean,
  close: () => void
}

export default function ModalRoutine({ open, close }: ModalRoutineProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 flex justify-center items-center z-50"
          style={{ backgroundColor: "rgba(0,0,0, 0.5)"}}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="rounded-2xl shadow-lg p-8 w-96 bg-[#171717] text-white"
            initial={{ scale: 0.8, opacity: 0, y: -30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-xl font-bold mb-4">Cadastro de Rotina</h2>

            <form className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Nome da rotina"
                className="outline-none rounded-lg p-2 bg-gray-800 text-white placeholder-gray-400"
              />
              <input
                type="time"
                className="outline-none rounded-lg p-2 bg-gray-800 text-white"
              />
              <textarea
                placeholder="Descrição"
                className="outline-none rounded-lg p-2 bg-gray-800 text-white placeholder-gray-400"
              ></textarea>

              <div className="flex justify-end gap-2 mt-4">
                <button
                  type="button"
                  onClick={close}
                  className="px-4 py-2 bg-gray-600 rounded-lg transition-colors duration-300 hover:bg-gray-500 cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-white text-black rounded-lg transition-colors duration-300 hover:bg-gray-600 hover:text-white cursor-pointer"
                >
                  Salvar
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
