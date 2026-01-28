'use client';

import { motion } from 'framer-motion';
import { Search, Home, ArrowLeft } from 'lucide-react';
import Button from '@/components/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black-primary flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl w-full"
      >
        <div className="glass-card text-center">
          {/* 404 Number */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="mb-6"
          >
            <h1 className="text-9xl md:text-[12rem] font-bold gradient-text leading-none">
              404
            </h1>
          </motion.div>

          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white-primary/5 mb-6"
          >
            <Search size={40} className="text-white-secondary" />
          </motion.div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-white-primary mb-4">
            Seite nicht gefunden
          </h2>

          {/* Description */}
          <p className="text-white-secondary text-lg mb-8 leading-relaxed">
            Die von Ihnen gesuchte Seite existiert nicht oder wurde verschoben.
            Bitte überprüfen Sie die URL oder kehren Sie zur Startseite zurück.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              icon={Home}
              href="/"
            >
              Zur Startseite
            </Button>
            <Button
              variant="secondary"
              size="lg"
              icon={ArrowLeft}
              onClick={() => window.history.back()}
            >
              Zurück
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
