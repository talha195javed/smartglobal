import React from 'react';
import { Sparkles } from 'lucide-react';

function Label({ text }) { return <div className="label">{text}<Sparkles size={14} /></div>; }

export default Label;
